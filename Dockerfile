
## iverse-student frontend web application
FROM node:18-alpine
# Working Directory
WORKDIR /usr/src/app
COPY . .
## Installing the Dependencies
RUN npm install
## Building Application
RUN npm run build
# Installing PM2 globally
RUN npm install -g pm2
## Application Port Number 3000
EXPOSE 3000
# Start the application
CMD ["pm2-runtime", "start", "npm", "--", "start"]
