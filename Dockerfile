### iqversestudent frontend Application Docker
FROM node:16.20 as iqversestudent-web-fe-dev
# Set the working directory
WORKDIR /usr/local/iqversestudent-web-fe-dev
# Add the source code to app
COPY . /usr/local/iqversestudent-web-fe-dev

# Install all the dependencies
RUN npm install -g npm@9.6.7
#RUN npm install --save react react-dom react-scripts
RUN npm install -f
# Generate the build of the application
RUN npm run build
# Stage 2: Serve app with nginx server
# Use official nginx image as the base image
FROM nginx:1.24
RUN apt-get update
RUN apt-get install -y vim
RUN mkdir /usr/share/nginx/html/build
COPY --from=iqversestudent-web-fe-dev /usr/local/iqversestudent-web-fe-dev/build /usr/share/nginx/html/build/
RUN chmod -R 755 /usr/share/nginx/html/build/
RUN chown -R nginx:nginx /usr/share/nginx/html/build/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./iqversestudent-web-fe-dev.conf /etc/nginx/conf.d/
EXPOSE 80
