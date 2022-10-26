FROM node:alpine
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

# docker build -t name .
# docker run -p 49160:3000 -d name 
# localhost:49160