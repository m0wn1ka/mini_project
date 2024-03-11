## ..
```
#!/bin/bash
docker rm -f web_proxyasaservice
docker build --tag=web_proxyasaservice .
docker run -p 1337:1337 -it --rm --name=web_proxyasaservice web_proxyasaservice
```
- in this similar way  we give a bash script to user
- when we need to containers for fronend and backend we run both of them in detached mode

```
#!/bin/bash
docker build -t jwt_frontend .
cd backend
docker build -t jwt_backend .
docker run -dp 127.0.0.1:4003:4003 jwt_backend
docker run -dp 127.0.0.1:3000:3000 jwt_frontend
```

## tagging pusing

```
docker login
 docker tag localhost/jwt_backend or  image_id radham0wn1ka1/jwt_backend
 docker push radham0wn1ka1/jwt_backend
```
## commands
```
docker image list
docker ps
docker stop image_id


docker system prune -a

docker rmi $(docker images -a -q)
```