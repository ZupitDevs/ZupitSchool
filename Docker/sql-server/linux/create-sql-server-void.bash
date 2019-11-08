if [ -z "$1" ]
then
      echo "Missing container_name  "
	  echo ""
	  echo "Usage ./${0} <container_name> <databaseName>"
	  
	  exit 1
fi

container_name=$1
adminPassword="longPassword123"

echo ""
echo "Creating sql server container with name ${container_name}...."

echo "adminPassword: ${adminPassword}"
echo "container_name : ${container_name}"

docker run -e ACCEPT_EULA=Y -e SA_PASSWORD=$adminPassword   -p 1434:1433 --name $container_name -d mcr.microsoft.com/mssql/server:2017-latest

 
