# SQL SERVER 

From a sql server backup file obtain a running sql server on localhost 1434 port with restored data .

For WSL Windows Subsystem Linux see one this steps :
 * [less secure approach](https://medium.com/@sebagomez/installing-the-docker-client-on-ubuntus-windows-subsystem-for-linux-612b392a44c4) 
or 
* [less easy approach](https://devblogs.microsoft.com/commandline/cross-post-wsl-interoperability-with-docker/) 

before continuing. 


According to OS host go to sub folder


```batch
cd windows 
```

or 

```bash
cd linux 
```


## Create source database ( optional )

### Generate Sql Server Backup file

#### In powershell : 

```powershell
powershell .\create-sql-server.ps1 testSource userDatabase

powershell .\extractBackup.ps1 testSource userDatabase
```

#### In bash : 

```bash
bash create-sql-server.bash testSource userDatabase

bash extractBackup.bash testSource userDatabase
```


In data folder is created userdb_LogBackup.bak file.


## Exercise


1. Create a sql server container listenting on port 1434 of localhost


<details><summary>See solution</summary>
<p>

```
docker run -e ACCEPT_EULA=Y -e SA_PASSWORD=YOURStrongpassowrd123   -p 1434:1433 --name NewSqlServer -d mcr.microsoft.com/mssql/server:2017-latest
```

</p>
</details>

2. Optional : configure sql server with login

<details><summary>See solution</summary>
<p>


```
docker exec -it NewSqlServer /opt/mssql-tools/bin/sqlcmd  -S localhost -U SA -P YOURStrongpassowrd123   -Q "   CREATE LOGIN <databaseLogin> WITH Password ='<databaseLoginPassword>'; "
```

</p>
</details>

3. Restore backup  to new container

<details><summary>See solution</summary>
<p>

```
cd data
docker cp  <database_LogBackup.bak> "<container_name>:/tmp/db.bak>"
 
docker exec -it NewSqlServer  /opt/mssql-tools/bin/sqlcmd  -S localhost -U SA -P YOURStrongpassowrd123 -Q "RESTORE DATABASE db1 from disk = '/tmp/db.bak';"


```

</p>
</details>

4. Query database

<details><summary>See solution: note some setting on sql server needed to use optional login created</summary>
<p>

```
docker exec -it  <container_name> /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P YOURStrongpassowrd123 -Q " use  db1 ; SELECT * from  users "
```


</p>
</details>
