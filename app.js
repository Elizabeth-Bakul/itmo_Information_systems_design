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
