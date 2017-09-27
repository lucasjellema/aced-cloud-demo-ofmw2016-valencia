
create sequence pat_seq;

drop table proposed_acts


create table proposed_acts
( id number(10) default pat_seq.nextval not null 
, name varchar2(200)
, proposal_timestamp timestamp default systimestamp
, description varchar2(200)
, genres varchar2(200)
, biography varchar2(4000)
, legal_name varchar2(200)
, country_of_origin varchar2(200)
, era varchar2(200)
, genre varchar2(100)
, artist_type varchar2(100) -- group, person
, popularity number(3)
, birthdate_of_artist date
, enddate_of_artist date
, number_of_votes number(10)
, image blob
, image_url varchar2(1000)
);

create table act_albums
( act_id number(10) not null
, title varchar2(250) not null
, description varchar2(4000) null
, release_date date null
, coverImageUrl varchar2(500) null
  , genre varchar2(100)
  , track_count number(3)
);

alter table proposed_acts
add constraint pat_pk primary key(id )
;


alter table act_albums
add constraint abm_pat_fk foreign key (act_id ) references proposed_acts(id) on delete cascade
;

insert into proposed_acts
( name, description, number_of_votes)
values
('De Dijk', 'Bit too Dutch for the masses I am afraid', 2);

insert into proposed_acts
( name, description, number_of_votes)
values
('Waylon', 'Will need to bring Ilse with him', 32);


insert into proposed_acts
( name, description, number_of_votes)
values
('Adele', 'Would be way cool! Not sure we can afford her', 24112);


insert into act_albums
( act_id , title , release_date , coverImageUrl )
values
((select max(id) from proposed_acts), 'My First' , to_date('01-04-1988','DD-MM-YYYY'),'https://upload.wikimedia.org/wikipedia/en/c/cb/1999_cover.jpg'
);

insert into act_albums
( act_id , title , release_date , coverImageUrl )
values
((select max(id) from proposed_acts), 'My Last' , to_date('01-04-2016','DD-MM-YYYY'),'https://upload.wikimedia.org/wikipedia/en/9/96/Parade_On_album_cover.jpg'
);




select * from proposed_acts

select * from act_albums



select id 
, name 
, proposal_timestamp 
, description 
, genres 
, biography 
, number_of_votes 
, image 
, image_url 
, cursor ( select title, release_date, coverImageUrl from act_albums aam where aam.act_id = pat.id)
from proposed_acts pat
