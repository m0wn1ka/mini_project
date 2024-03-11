FROM node:18-alpine
WORKDIR /app
COPY . .
RUN touch backend_test
RUN npm install
EXPOSE 4003
CMD ["node","index.js"]