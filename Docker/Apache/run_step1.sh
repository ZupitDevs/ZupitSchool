cd step1
docker build -t my_httpd . 
docker run -p 8000:80 my_httpd

