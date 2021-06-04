// Backups


mysqldump -u [user name] –p [password] [options] [database_name] [tablename] > [dumpfilename.sql]
mysqldump -u root -p sakila > C:\MySQLBackup\sakila_20200424.sql

REstore
create database sakila;
mysql -u root -p sakila < C:\MySQLBackup\sakila_20200424.sql





----------------------------------
Install mysql
----------------------------------
sudo yum install mysql-server
sudo dnf install mysql-server
sudo systemctl start mysqld.service
sudo systemctl status mysqld
sudo systemctl enable mysqld

----------------------------------
Secure mysql
----------------------------------
sudo mysql_secure_installation

----------------------------------
Test mysql
----------------------------------
mysqladmin -u root -p version

----------------------------------
Connect to mysql
----------------------------------
mysql -u root -p

---------------------------------
Add a user
---------------------------------
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypass';
CREATE USER 'myuser'@'%' IDENTIFIED BY 'mypass';

GRANT ALL ON *.* TO 'myuser'@'localhost';
GRANT ALL ON *.* TO 'myuser'@'%';
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';
GRANT ALL ON *.* TO 'myuser'@'localhost' with grant option; // This will give DBA rights

FLUSH PRIVILEGES;

---------------------------------
Additional options
---------------------------------
ALL – Allow complete access to a specific database. If a database is not specified, then allow complete access to the entirety of MySQL.
CREATE – Allow a user to create databases and tables.
DELETE – Allow a user to delete rows from a table.
DROP – Allow a user to drop databases and tables.
EXECUTE – Allow a user to execute stored routines.
GRANT OPTION – Allow a user to grant or remove another user’s privileges.
INSERT – Allow a user to insert rows from a table.
SELECT – Allow a user to select data from a database.
SHOW DATABASES- Allow a user to view a list of all databases.
UPDATE – Allow a user to update rows in a table.

---------------------------------
Remove MySql completely
---------------------------------
sudo yum remove mysql mysql-server
remove mysql folder from /var/lib/mysql
reinstall it

---------------------------------
install firewalld GUI
---------------------------------
sudo yum install firewall-config

---------------------------------
Create database on target machine for copy
---------------------------------
CREATE DATABASE classicmodels_backup;
SHOW DATABASES

---------------------------------
dump db
---------------------------------
mysqldump -u root -p classicmodels > d:\db\classicmodels.sql

---------------------------------
import db
---------------------------------
mysql -u root -p classicmodels_backup < d:\db\classicmodels.sql

---------------------------------
check db
---------------------------------
SHOW TABLES FROM classicmodels_backup;

---------------------------------
Show users and relevant details
---------------------------------
select host, user, Select_priv, Insert_priv, Update_priv, Delete_priv, Create_priv, Drop_priv from mysql.user;

---------------------------------
delete users
---------------------------------
drop user 'user'@'%';