FROM debian

MAINTAINER websylvain <websylvain.com>

RUN apt-get update && apt-get install -my wget gnupg -y

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -

RUN apt-get install -y nodejs nano

RUN npm install -g nodemon

WORKDIR /app

VOLUME /app/

ADD /node-app/ /app/

RUN npm install

EXPOSE 3000

CMD nodemon app.js