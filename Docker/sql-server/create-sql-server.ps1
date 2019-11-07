[CmdletBinding()]
Param(
  [Parameter(Mandatory=$true, Position=0)]
  [string]$container_name,

  [Parameter(Mandatory=$true, Position=1)]
  [string]$database
)

$adminPassword = "longPassword123" 
$login = $database + "Sa";
$password = "longPassword123"

"adminPassword: ${adminPassword}"
"container_name : "+$container_name
"database : "+$database
"login : "+$login
"db password: ${password}"

docker run -e ACCEPT_EULA=Y -e SA_PASSWORD=$adminPassword   -p 1433:1433 --name $container_name -d mcr.microsoft.com/mssql/server:2017-latest
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd    -S localhost -U SA -P $adminPassword   -Q "   CREATE LOGIN ${login} WITH Password ='${password}';   use master;   create database ${database};  "
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd    -S localhost -U SA -P $adminPassword   -Q" use ${database};create user ${login} from login ${login};ALTER USER [${login}] WITH DEFAULT_SCHEMA=[dbo];exec sp_addrolemember 'db_owner','${login}';"
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U $login -P $password   -Q" use ${database};create table users( id integer primary key , name varchar(20) not null )"
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U $login -P $password   -Q" use ${database};insert into users values ( 1 , 'roberto');"
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U $login -P $password -Q " use ${database}; SELECT * from  users "
 