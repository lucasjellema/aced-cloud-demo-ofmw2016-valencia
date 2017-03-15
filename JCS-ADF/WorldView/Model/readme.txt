Create database user:

create user world identified by world default tablespace users temporary tablespace temp;

grant connect to world; 
grant create table to world; 
grant create any procedure to world; 
grant create synonym to world; 
grant create view to world; 
grant create sequence to world; 

alter user world  quota unlimited on users;
grant execute on dbms_lock to world;


As user World:

create table world_countries 
( name varchar2(100)
, code varchar2(5)
, continent varchar2(20)
, population number(10)
, area number(10)
, coastline number(10)
, government_form varchar2(100)
, currency_name varchar2(100)
, currency_unit varchar2(5)
, birthrate number(4,1)
, deathrate number(4,1)
, life_expectancy number(4,1)
, url  varchar2(100)
);

create or replace
function derive_rich_placeholder
( p_country_code in varchar2
, p_continent in varchar2
, p_population in number
) return varchar2
is
begin
  if p_continent = 'Asia'
  then
    dbms_lock.sleep(0.2);
  end if;
  return 'my enriched value';
end;



create or replace view countries_vw
as select derive_rich_placeholder(wc.code, wc.continent, wc.population) rich_value
, wc.*
from world_countries wc


Used countries data from https://www.worlddata.info/downloads/ 



Crucial pointer for deploying ADF BC and hooking up to JDBC Data Source: https://go2kavinkumar.wordpress.com/tag/jndi-lookup/ 
conclusion: 
* connections.xml has to contain a connection entry with the same name as the data source (Without the jdbc and the DS)
* ADF expects the data source JNDI name to start with jdbc/ and end with DS 
