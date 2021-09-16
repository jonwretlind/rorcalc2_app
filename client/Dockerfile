FROM node

WORKDIR /rorcalc2 

COPY package*.json /rorcalc2/

RUN npm install 

COPY . /rorcalc2/

EXPOSE 3000 

CMD ["npm","start"]

