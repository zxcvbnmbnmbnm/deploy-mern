const express = require("express");
const app = express();

let reqCount = 1;

app.set("view engine", "ejs");

app.get("/data", (req, res) => {
  res.json({ message: "This is from server...", reqCount: reqCount++ });
});

app.get("/*", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server listening on port ==> ", PORT);
});
