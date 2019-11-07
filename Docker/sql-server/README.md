# SQL SERVER 

From da sql server backup file obtain a running sql server on localhost 1433 port with restored data .


## Create source database


### Windows Enviroment

0. Preparation  :

In powershell : 

.\create-sql-server.ps1 testSource userDatabase

.\extractBackup.ps1 testSource userDatabase

In data  folder  now you'll find userDatabase_LogBackup.bak

2. Execise 

Check if no 

docker ps 



Create a docker mac

