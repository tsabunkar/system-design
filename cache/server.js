const database = require("./database");
const express = require("express");

const app = express();
const localCache = {};

// http://localhost:3001/nocache/index.html
app.get("/nocache/index.html", (req, resp) => {
  database.get("index.html", (page) => {
    resp.send(page);
  });
});

// http://localhost:3001/withcache/index.html
app.get("/withcache/index.html", (req, resp) => {
  if ("index.html" in localCache) {
    resp.send(localCache["index.html"]);
    return; // no need to fetch from db, If already present in the cache retrieve from there
  }

  database.get("index.html", (page) => {
    localCache["index.html"] = page; // first time need to built/store in the localCache
    resp.send(page);
  });
});

app.listen(3001, () => {
  console.log("listening at 3001");
});
