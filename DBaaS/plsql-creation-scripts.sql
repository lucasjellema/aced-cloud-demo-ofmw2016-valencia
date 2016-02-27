rem TODO : only insert unique album-titles that do not already exist in table act_albums

create or replace 
type album_t as object (
    title varchar2(200)
  , release_date date
  , cover_image_url varchar2(500)
);

create or replace 
type discography_t as table of album_t
;

create or replace 
type artist_t as object
( name varchar2(200)
, genres varchar2(200)
, biography varchar2(4000)
, image_url varchar2(250)
, albums discography_t
);

create or replace
package act_proposal_api
is

procedure submit_act_proposal
( p_description in varchar2
, p_number_of_votes in number
, p_image in blob
, p_artist in artist_t
, p_id out number
);

procedure verify_proposal_for_act
( p_act_name in out varchar2
, p_act_proposed_yn out varchar2
, p_registration_date out date
, p_description out varchar2
, p_image_url out varchar2
, p_number_of_votes out number
, p_id out number
);


end act_proposal_api;


create or replace
package body act_proposal_api
is

procedure submit_act_proposal
( p_description in varchar2
, p_number_of_votes in number
, p_image in blob
, p_artist in artist_t
, p_id out number
) is
begin
  merge into proposed_acts pa
    using (select p_artist.name name, p_description description, p_number_of_votes number_of_votes, p_artist.image_url image_url
    , p_image image ,p_artist.biography biography, p_artist.genres genres from dual) new_act
    ON (pa.name = new_act.name)
  WHEN MATCHED THEN
    UPDATE SET pa.number_of_votes = pa.number_of_votes + new_act.number_of_votes
  WHEN NOT MATCHED THEN
    INSERT (name, description, number_of_votes, image_url, image, genres, biography)
    VALUES (new_act.name,new_act.description,new_act.number_of_votes,new_act.image_url, new_act.image, new_act.genres, new_act.biography)
   
    ;
  select pa.id
  into   p_id
  from   proposed_acts pa
  where  pa.name = p_artist.name;
  /* and now insert into act_albums the details from p_artist 
  create table act_albums
( act_id number(10) not null
, title varchar2(250) not null
, release_date date null
, coverImageUrl varchar2(500) null
);
  */
  
      insert into act_albums
      (act_id, title, coverImageUrl, RELEASE_DATE)
      select p_id, uab.title, uab.cover_image_url, release_date 
      from 
      (
      select abm.*
      ,      row_number() over (partition by abm.title order by release_date asc) seq
      from   table(	p_artist.albums) abm  
      ) uab
      where uab.seq = 1
      and not exists (select 'x'from act_albums abm where abm.act_id = p_id and abm.title = uab.title)
      ;
end submit_act_proposal;

procedure verify_proposal_for_act
( p_act_name in out varchar2
, p_act_proposed_yn out varchar2
, p_registration_date out date
, p_description out varchar2
, p_image_url out varchar2
, p_number_of_votes out number
, p_id out number
) is
begin

  begin
    select pa.name,  pa.image_url, pa.description, pa.number_of_votes, pa.id, pa.proposal_timestamp
	into   p_act_name, p_image_url, p_description, p_number_of_votes,p_id,p_registration_date
	from   proposed_acts pa
	where  upper(pa.name) = upper(p_act_name)
	and    rownum = 1 /* prevent too many rows */
	;
	p_act_proposed_yn:= 'Y';

  exception
     when no_data_found
	 then
	   p_act_proposed_yn:= 'N';
  end;
end verify_proposal_for_act;


end act_proposal_api;



declare
  l_id number(10);
  l_discography discography_t := discography_t( album_t('The River', sysdate-40*365, 'someURL')
                                             ,album_t('The River', sysdate-30*365, 'someURL') 
											 , album_t('Devils and Dust', sysdate-15*365, 'someOtherURL')
											 );
  l_artist artist_t := artist_t('Bruce Springsteen','Rock', 'interesting story', 'https://lh5.googleusercontent.com/-p_K5qbCOZ6Q/AAAAAAAAAAI/AAAAAAAAALc/KHank3SfKrE/s0-c-k-no-ns/photo.jpg', l_discography );
begin
act_proposal_api.submit_act_proposal
( p_description => 'American Rock Artist'
, p_number_of_votes => 321
, p_image => null
, p_artist => l_artist
, p_id => l_id
);
 commit;
end;

