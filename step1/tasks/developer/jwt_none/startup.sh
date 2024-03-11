#!/bin/bash
docker build -t jwt_frontend .
cd backend
docker build -t jwt_backend .
docker run -dp 127.0.0.1:4003:4003 jwt_backend
docker run -dp 127.0.0.1:3000:3000 jwt_frontend