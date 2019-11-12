# Image layers

```
docker pull redis:3.0.0
docker pull nginx:1.7

```


# Container shell

```
docker run -it ubuntu /bin/bash

#sample commands on container shell
ls
ps -aux

#exits from commands
exit

```

# Detached mode

```
docker run -d hello-world
b4ec9.....

docker logs b4ec9

docker run -it ubuntu /bin/bash

#detach from container leaving it running
CTRL + P + Q

#get the container hashcode
docker ps

#attach to container
docker attach <hash first characters>

```

# Other simple commands

```
docker run -it ubuntu /bin/bash
docker top 33
docker port <container> <port>
docker rm --force <container>
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

```