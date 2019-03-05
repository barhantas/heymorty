FROM node:10.15.2-alpine

#ARG proxy=http://IP:PORT/
#ENV HTTP_PROXY=${proxy} HTTPS_PROXY=${proxy} http_proxy=${proxy} https_proxy=${proxy}
#RUN npm config set proxy ${HTTP_PROXY}
#RUN npm config set https-proxy ${HTTP_PROXY}
#RUN npm config set registry http://registry.npmjs.org/


WORKDIR /app
COPY package*.json ./
COPY . /app
RUN npm install -qy

ENV PORT 3000

EXPOSE 8000

CMD ["npm", "start"]