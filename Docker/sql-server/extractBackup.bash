if [ -z "$1" ]
then
      echo "Missing container_name"
	  echo ""
	  echo "Usage ./${0} <container_name> "
	  
	  exit 1
else
      container_name=$1
	  database=${container_name}Db;
	  login=${container_name}Sa;
fi

echo ""


adminPassword="longPassword123" 
database=${container_name}Db;
login=${container_name}Sa;
password="longPassword123"
fileBackup="${database}_LogBackup.bak"
pathBackup="/var/opt/mssql/data/${fileBackup}"

echo "adminPassword: ${adminPassword}"
echo "container_name : ${container_name}"
echo "database : ${database}"
echo "login : ${login}"
echo "db password: ${password}"
echo "db password: ${password}"
echo "pathBackup: ${pathBackup}"

 
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P $adminPassword -Q "BACKUP DATABASE  ${database} TO DISK = '${pathBackup}'"
docker cp "${container_name}:${pathBackup}" data/$fileBackup
