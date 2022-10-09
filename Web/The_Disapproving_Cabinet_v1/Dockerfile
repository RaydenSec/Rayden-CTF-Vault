FROM node:alpine
WORKDIR /app 
# in app directory now
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# docker build -t <your username>/name .
# docker image ls 

# docker run name

# docker run -p 49160:3000 -d <your username>/name  (3000 is our port)
# docker ps (check container ID)
# docker logs <container ID> (check app output eg. running on port ...)  

# now you can go to localhost:49160

# btw, delete containers if you don't need them anymore, and keep the images if they're not modified