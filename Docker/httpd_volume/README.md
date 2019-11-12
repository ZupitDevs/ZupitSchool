# Building and running container with a volume

```
docker build -t httpd_with_volume:1 .

docker images

docker run -d -p 8088:80 -v /d/Projects/ZupitSchool/Docker/httpd/src/:/usr/local/apache2/htdocs/ httpd_with_volume:1

curl http://localhost:8088


docker stop <container>
docker rm <container>
docker image remove httpd_with_volume:1

```