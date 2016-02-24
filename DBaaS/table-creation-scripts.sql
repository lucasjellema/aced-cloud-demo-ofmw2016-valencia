
create sequence pat_seq;

drop table proposed_acts


create table proposed_acts
( id number(10) default pat_seq.nextval not null 
, name varchar2(200)
, proposal_timestamp timestamp default systimestamp
, description varchar2(200)
, genres varchar2(200)
, biography varchar2(4000)
, number_of_votes number(10)
, image blob
, image_url varchar2(250)
);

create table act_albums
( act_id number(10) not null
, title varchar2(250) not null
, release_date date null
, coverImageUrl varchar2(500) null
);



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
