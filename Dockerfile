FROM node:latest
WORKDIR /app

COPY [".", "."]

RUN ls
RUN npm install


EXPOSE 8080

CMD [ "node", "app.js" ]
