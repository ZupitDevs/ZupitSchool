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

$fileBackup = "${database}_LogBackup.bak"
$pathBackup = "/var/opt/mssql/data/${fileBackup}"


"adminPassword: ${adminPassword}"
"container_name : ${container_name}"
"database : ${database}"
"login : ${login}"
"db password: ${password}"
"db password: ${password}"
"pathBackup: ${pathBackup}"

 
docker exec -it $container_name /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P $adminPassword -Q "BACKUP DATABASE  ${database} TO DISK = '${pathBackup}'"
docker cp "${container_name}:${pathBackup}" data\$fileBackup



