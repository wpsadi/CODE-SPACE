MySQL is case insensitive;

show databases -  shows all the databases in the computer
create database <name> - creates database with "name"

use <database> - selects database with name "database"

drop <database> - deleted a databse

# creating a table
create table <table>{
    description of each attribute
}

# condition
where
like - % to search for character , _ for exact length
order by<attribute> desc(optional for reverse) as (optional for ascending (default) )
    if attribute is same then we can provide any other element to arrange

limit - get only specific number of records
offset <number> - it tell from which count we have to should show result; -> used to create pagination

update <attribute> - used to update attribute itself;

delete - to delete an entry from table

while creating table we can do auto increment