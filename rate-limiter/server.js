import { get } from "./database.js";
import express from "express";
const app = express();

app.listen(3000, () => console.log("listen on port 3000"));

// hashtable
const accesses = {};

app.get("/index.html", function (req, resp) {
  const { user } = req.headers;
  console.log(user);
  if (user in accesses) {
    const previousAccessTime = accesses[user];

    if (Date.now() - previousAccessTime < 5000) {
      resp.status(429).send("Too Many Request send by you");
      return;
    }
  }

  get("index.html", (page) => {
    accesses[user] = Date.now();
    resp.send(page + "\n");
  });
});
