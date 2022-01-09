const express = require("express");
const app = express();
const articles = [{ title: "Example" }, { title: "Example2" }];

const port = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/articles", (req, res, next) => {
  res.send(articles);
});

app.post("/articles", (req, res, next) => {
  res.send({ message: "OK" });
});

app.get("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("Fetching:", id);
  res.send(articles[id]);
});

app.delete("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("Deleting:", id);
  delete articles[id];
  res.send({ message: "Deleted" });
});

app.listen(port, () => {
  console.log(`Express web app available at localhost: ${port}`);
});

module.exports = app;
