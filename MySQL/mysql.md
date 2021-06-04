#Start the CLI:
mysql-ctl cli; 

#List available databases:
show databases; 

--The general command for creating a database:
CREATE DATABASE database_name; 

--A specific example:
CREATE DATABASE soap_store; 
To drop a database:
DROP DATABASE database_name; 
For Example:
DROP DATABASE hello_world_db; 

--To Use a database:
USE <database name>;

--Creating tables:
CREATE TABLE tablename(
column_name data_type,
column_name data_type
);

CREATE TABLE cats (
name VARCHAR(100),
age INT
  );

--Testing that it worked:
SHOW TABLES;
SHOW COLUMNS FROM tablename;
DESC tablename;

--Dropping Tables:
DROP TABLE <tablename>; 
A specific example:
DROP TABLE cats;
Inserting Data:
INSERT INTO table_name(column_name) VALUES (data);
For example:
INSERT INTO cats(name, age) 
VALUES ('Jetson', 7);
 
--Multiple Inserts:
INSERT INTO table_name 
            (column_name, column_name) 
VALUES      (value, value), 
            (value, value), 
            (value, value);

Select all rows from a table:
SELECT * FROM cats; 

--MySQL Warnings Code:
SHOW WARNINGS; 

 
--Define a new table with NOT NULL constraints:
CREATE TABLE cats2
  (
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
  );

--Define a table with a DEFAULT name specified:
CREATE TABLE cats3
  (
    name VARCHAR(20) DEFAULT 'no name provided',
    age INT DEFAULT 99
  );

--Combine NOT NULL and DEFAULT:
CREATE TABLE cats4
  (
    name VARCHAR(20) NOT NULL DEFAULT 'unnamed',
    age INT NOT NULL DEFAULT 99
  );
  
--Define a table with a PRIMARY KEY constraint:
CREATE TABLE unique_cats
  (
    cat_id INT NOT NULL,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
  );

 
--Define a table with AUTO_INCREMENT:
CREATE TABLE unique_cats2 (
    cat_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
);


--Another way of defining a primary key:
CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    age INT NOT NULL,
    current_status VARCHAR(255) NOT NULL DEFAULT 'employed'
);

--Various Simple SELECT statements:
SELECT * FROM cats; 
SELECT name FROM cats; 
SELECT age FROM cats; 
SELECT cat_id FROM cats; 
SELECT name, age FROM cats; 
SELECT cat_id, name, age FROM cats; 
SELECT age, breed, name, cat_id FROM cats; 
SELECT cat_id, name, age, breed FROM cats; 
 
--Select by age:
SELECT * FROM cats WHERE age=4; 
Select by name:
SELECT * FROM cats WHERE name='Egg'; 
--Notice how it deals with case:
SELECT * FROM cats WHERE name='egG'; 
--CODE: Introduction to Aliases:
SELECT cat_id AS id, name FROM cats;
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats;
DESC cats;
--CODE: Updating Data:
UPDATE cats SET breed='Shorthair' WHERE breed='Tabby'; 
Another update:
UPDATE cats SET age=14 WHERE name='Misty'; 
Delete a record:
DELETE FROM cats WHERE name='Egg';
Delete ALL Records:
DELETE FROM cats
--CODE: Running SQL Files:
source path/to/file.sql
 
--CODE: Working With CONCAT:
SELECT CONCAT(author_fname, ' ', author_lname)FROM books;
SELECT author_fname AS first, author_lname AS last, CONCAT(author_fname, ', ', author_lname) AS full FROM books;
SELECT CONCAT_WS(' - ', title, author_fname, author_lname)FROM books;
--Substring:
select substring('String', start_index, end_index);
--Substring from the end of the string:
select substring('String', -start_index);
--Substring with Concat:
select concat(substring(title, 1, 10), "...") as 'Short Title' from books;
--Replacing data:
select replace('String', 'WhatToRemove', 'ReplacementText');
--Replace all instances of a single item:
select replace('cheese bread coffee milk', ' ', ' and ')
 
--Replace and concat:
select substring(replace(title, '3', 'e'), 1, 10) as 'Fix my broken' from books;
--Reverse the output:
select reverse(title) from books;
--Character length:
select char_length(title) as 'Number of characters', title as 'Title' from books;
--Changing Case with UPPER() and LOWER()
-- these only take ONE argument:
select upper(title) from books;
select lower(title) from books;
--Show only one copy of data:
select distinct author_lname from books;
select distinct concat(author_fname, " ", author_lname) from books;
select distinct author_fname, author_lname from books;;
Order by clause:
select distinct author_lname from books order by author_lname;
Order by numbered element:
select title, author_fname, author_lname from books order by 2;
 
Order by one item then another item:
select author_fname, author_lname from books order by author_lname, author_fname;
--Limit the result set:
select title, released_year from books order by released_year desc limit 5;
--Limit with start and end(0 based index)
select title, released_year from books order by released_year desc limit 3,5;
Select from x to (arbitrary large number that denotes end):
select title from books limit 0,18989883938383;
--Fuzzy searches: % is wildcard:
select * from books where author_fname like '%Da%';
Select a specific number of characters in a pattern: 
select * from phoneNumbers where phoneNumber like '(___)___-___';
--Search with an escape sequence:
select * from books where title like '%\%%';
 
--count aggregate function:
select count(distinct author_lname, author_fname) as "Individual Authors" from books;
select count(title) as "Titles with 'the'" from books where title like '%the%';
Group by- Get count of unique author books, by released year:
select title, author_fname, author_lname, count(*) from books group by author_lname, author_fname;
select concat("In", released_year, " there were: ", count(*), " book(s) released") as "Books released" from books group by released_year;
--Min and max:
select min(released_year) from books;
select max(released_year) from books;
--Get the title of the longest book with a sub-query (slow, running more than 1 query):
select title, pages from books 
where pages = 
(select max(pages) from books);

--Min and max with concat and group by

select concat(author_fname, " ", author_lname) as author, max(pages) as 'Highest page count' from books
group by author_lname, author_fname;

--Sum function:

select sum(pages) from books;

--Sum with group by: 
select author_fname, author_lname, sum(pages) from books group by author_lname, author_fname;
--avg function:
select avg(released_year) from books;
--avg with group by:
select released_year, count(*), avg(stock_quantity) from books group by released_year;
select author_fname, author_lname, avg(pages) from books group by author_lname, author_fname;
--Formatting dates (also a time format)
select name, date_format(birthdate,'%W %M %Y') from people;
select date_format(birthdt, 'Was born on a %W') from people;
select date_format(birthdate, '%m/%d/%Y') from people;
--Date math:
select birthdt, date_add(birthdt, interval 1 month) from people;
 
--Chaining date math:
select birthdt, birthdt + interval 15 month + interval 10 hour from people;
--Timestamps:
create table comments(content varchar(100), created_at timestamp default now());
create table comments2(content varchar(100), changed_at timestamp default now() on update current_timestamp);
create table comments2(content varchar(100), changed_at timestamp default now() on update now());
/* And */
SELECT * FROM books WHERE author_lname='Eggers'
    AND released_year > 2010 
    AND title LIKE '%novel%';

/* OR */
SELECT title, author_lname, released_year, stock_quantity 
FROM   books 
WHERE  author_lname = 'Eggers' 
        || released_year > 2010 
        OR     stock_quantity > 100;

 
/* BETWEEN */
SELECT title, released_year FROM books 
WHERE released_year BETWEEN 2004 AND 2015;
/* NOT BETWEEN */
SELECT title, released_year FROM books 
WHERE released_year NOT BETWEEN 2004 AND 2015;
/* Static cast dates */
SELECT name, birthdt 
FROM people
WHERE birthdt BETWEEN CAST('1980-01-01' AS DATETIME) AND CAST('2000-01-01' AS DATETIME);
/* IN */
SELECT title, released_year FROM books
WHERE released_year IN (2017, 1985);
/* check even years with modulus */
SELECT title, released_year FROM books
WHERE released_year >= 2000 AND
released_year % 2 != 0 ORDER BY released_year;
/* Case statements */
select title, released_year,
    case
        when released_year >= 2000 then 'Modern Lit'
        else '20th Century lit'
    end
    as 'Time period'
from books;
/* Case statements cont. */
select title, stock_quantity,
    case
        when stock_quantity between 0 and 50 then '*'
        when stock_quantity between 50 and 100 then '**'
        else '***'
    end
    as "stock"
from books;

select title, stock_quantity,
case 
when stock_quantity <= 50 then '*'
when stock_quantity <=100 then '*'
else '***'
end
as 'stock'
from books;
/* (implicit) cross-joins (useless) */
select * from table1, table2;
/* Implicit inner join (table.field) */
select * from customers, orders
where orders.customer_id = customers.id;
/* Explicit inner join better syntax */
select first_name, last_name, order_amount from customers
join orders
on orders.customer_id = customers.id;

/* Inner join cont */
select first_name, last_name, sum(order_amount) as total_spent
from customers
join orders
on orders.customer_id = customers.id
group by orders.customer_id
order by total_spent desc;
/* left joins */
select * from customers 
left join orders 
on customers.id=orders.customer_id;
/* Handling null */
select  first_name, 
        last_name, 
-- Check if sum(order_amount) is null
-- replace with second argument if yes
        IFNULL(sum(order_amount), 0) as total_spent
from customers
left join orders
on customers.id = orders.customer_id
group by customers.id
order by total_spent desc;
/* Right joins */














