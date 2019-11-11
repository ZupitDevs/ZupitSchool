cd step2
docker build -t my_php . 
docker run -p 8000:80 my_php


