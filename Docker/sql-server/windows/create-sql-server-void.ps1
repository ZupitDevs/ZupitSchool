[CmdletBinding()]
Param(
  [Parameter(Mandatory=$true, Position=0)]
  [string]$container_name
)

$adminPassword = "longPassword123" 

""
"adminPassword: ${adminPassword}"
"container_name : "+$container_name

""
"Creating sql server container with name ${container_name}...."
""


docker run -e ACCEPT_EULA=Y -e SA_PASSWORD=$adminPassword   -p 1434:1433 --name $container_name -d mcr.microsoft.com/mssql/server:2017-latest
 
