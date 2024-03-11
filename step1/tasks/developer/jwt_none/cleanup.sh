#!/bin/bash
docker stop $(docker ps -qf ancestor=localhost/jwt_backend:latest)
docker stop $(docker ps -qf ancestor=localhost/jwt_frontend:latest)
