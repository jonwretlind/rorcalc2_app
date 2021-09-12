FROM node

WORKDIR /server 

COPY package*.json /server/

RUN npm install 

COPY . /server/

EXPOSE 2020

CMD ["npm","start"]

