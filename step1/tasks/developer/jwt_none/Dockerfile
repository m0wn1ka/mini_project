FROM node:18-alpine
WORKDIR /app
COPY frontend .
RUN touch fronend_test
RUN npm install
EXPOSE 3000
CMD ["npm","start"]