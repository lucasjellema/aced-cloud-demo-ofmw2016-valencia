create or replace 
type album_t force as object  (
    title varchar2(200)
  , description varchar2(4000)
  , release_date varchar2(40)
  , genre varchar2(100)
  , track_count number(3)
  , cover_image_url varchar2(500)
);

create or replace 
type discography_t as table of album_t
;

create or replace 
type artist_t force as object
( name varchar2(200)
, legal_name varchar2(200)
, genres varchar2(1000)
, country_of_origin varchar2(200)
, era varchar2(200)
, genre varchar2(100)
, biography varchar2(4000)
, image_url varchar2(1000)
, artist_type varchar2(20) -- group, person
, popularity number(3)
, birthdate_of_artist varchar2(50)
, enddate_of_artist varchar2(50)
, albums discography_t
);


create or replace
package act_proposal_api
is

function get_act_details
( p_id in number)
return artist_t
;

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

function get_act_details
( p_id in number)
return artist_t
is 
  l_artist artist_t;
begin
  select artist_t(
name 
, legal_name 
, genres 
, country_of_origin 
, era 
, genre 
, biography 
, image_url 
, artist_type 
, popularity 
, birthdate_of_artist 
, enddate_of_artist 
, cast
         ( multiset 
           ( select album_t(title 
  , description 
  , release_date 
  , genre 
  , track_count 
  , coverimageurl )
             from   act_albums abm
             where  abm.act_id = act.id
            )
          as discography_t
)
  )
  into l_artist
  from proposed_acts act
  where id = p_id;
  return l_artist;
end get_act_details;  


procedure submit_act_proposal
( p_description in varchar2
, p_number_of_votes in number
, p_image in blob
, p_artist in artist_t
, p_id out number
) is
  l_dummy_name varchar2(50):='The Artist Without Name';
begin
  merge into proposed_acts pa
    using (select nvl(p_artist.name,l_dummy_name ) name, p_description description, p_number_of_votes number_of_votes, p_artist.image_url image_url
    , p_image image ,p_artist.biography biography, p_artist.genres genres
    , p_artist.legal_name legal_name, p_artist.era era, p_artist.genre genre, p_artist.artist_type artist_type
    , p_artist.popularity popularity
    , case  p_artist.country_of_origin
      when 'England' then 'United Kingdom'
      else p_artist.country_of_origin
      end country_of_origin
    , p_artist.birthdate_of_artist birthdate_of_artist,p_artist.enddate_of_artist enddate_of_artist
     from dual) new_act
    ON (pa.name = new_act.name)
  WHEN MATCHED THEN
    UPDATE SET pa.number_of_votes = pa.number_of_votes + new_act.number_of_votes
  WHEN NOT MATCHED THEN
    INSERT (name, description, number_of_votes, image_url, image, genres, biography
    , legal_name, era, genre, artist_type, popularity, country_of_origin
    ,  birthdate_of_artist ,enddate_of_artist 
)
    VALUES (new_act.name,new_act.description,new_act.number_of_votes,new_act.image_url
    , new_act.image, new_act.genres, new_act.biography
    , new_act.legal_name, new_act.era, new_act.genre, new_act.artist_type, new_act.popularity, new_act.country_of_origin 
    , derive_date(new_act.birthdate_of_artist), derive_date(new_act.enddate_of_artist  )
    );
  select pa.id
  into   p_id
  from   proposed_acts pa
  where  pa.name = nvl(p_artist.name, l_dummy_name);

  
      insert into act_albums
      (act_id, title, coverImageUrl, RELEASE_DATE, genre, track_count)
      select p_id, uab.title, uab.cover_image_url, derive_date(release_date), genre,track_count
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
       p_number_of_votes:= 0;
  end;
end verify_proposal_for_act;


end act_proposal_api;


create or replace 
function derive_date
(p_date_string in varchar2) 
return date
is
  l_date date := to_date('01-01-2007','DD-MM-YYYY');
begin
  begin
   l_date := to_date(substr(p_date_string,1,10),'YYYY-MM-DD');
   exception
     when others
     then
       begin
         l_date := to_date(substr(p_date_string,1,7),'YYYY-MM');
       exception
         when others
         then
           begin
             l_date := to_date(substr(p_date_string,1,4),'YYYY');
         exception
           when others
           then
             null;
        end;
     end;
  end;
  return l_date;
end derive_date;

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



