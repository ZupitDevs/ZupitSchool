if [ -z "$1" ]
then
      echo "Missing container_name  "
	  echo ""
	  echo "Usage ./${0} <container_name> <databaseName>"
	  
	  exit 1
fi
if [ -z "$2" ]
then
      echo "Missing   databaseName"
	  echo ""
	  echo "Usage ./${0} <container_name> <databaseName>"
	  
	  exit 1
fi
container_name=$1
database=$2;
login=${database}Sa;
adminPassword="longPassword123"
password="longPassword123"

echo ""
echo "Creating sql server container with name ${container_name}...."

echo "adminPassword: ${adminPassword}"
echo "container_name : ${container_name}"
echo "database : ${database}"
echo "login : ${login}"
echo "db password: ${password}"

docker run -e ACCEPT_EULA=Y -e SA_PASSWORD=$adminPassword   -p 1433:1433 --name $container_name -d mcr.microsoft.com/mssql/server:2017-latest
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd    -S localhost -U SA -P $adminPassword   -Q "   CREATE LOGIN ${login} WITH Password ='${password}';   use master;   create database ${database};  "
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd    -S localhost -U SA -P $adminPassword   -Q" use ${database};create user ${login} from login ${login};ALTER USER [${login}] WITH DEFAULT_SCHEMA=[dbo];exec sp_addrolemember 'db_owner','${login}';"
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U $login -P $password   -Q" use ${database};create table users( id integer primary key , name varchar(20) not null )"
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U $login -P $password   -Q" use ${database};insert into users values ( 1 , 'roberto');"
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U $login -P $password -Q " use ${database}; SELECT * from  users "
 