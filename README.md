## Задание 5. Flask. Docker
### Серверное приложение на NodeJs
Выполнение задания:
```js
const express = require("express");
const app = express();

const port = 8080;

let counter = 0;

app.get("/", (_, res) => {
  res.end(JSON.stringify(counter));
});

app.get("/stat", (_, res) => {
  res.end(JSON.stringify(counter++));
});

app.get("/about", (_, res) => {
  const html = `<h3>Hello, Bakulina Elizaveta</h3>`;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```
Файл 
```dockerfile
FROM node:latest
WORKDIR /app

COPY [".", "."]

RUN ls
RUN npm install


EXPOSE 8080

CMD [ "node", "app.js" ]
```

Собираем образ:
```text
docker build -t elizabethbbakul/lab1
```

Помещаем образ в репозиторий Docker Hub:
```text
docker push elizabethbbakul/lab1
```


И запустить контейнер:
```text
docker run elizabethbbakul/lab1
```
