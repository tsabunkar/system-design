const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("listening at 3000");
});

app.get("/hello", (req, resp) => {
  console.log(req.headers);
  resp.send("Hello\n");
});
