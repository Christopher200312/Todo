const osas = require("express");
require("./config/dataase");

const port = 2005;
const app = osas();

app.use(osas.json());

// DEFAULT GET

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OSAS TODO GET SERVER IS READY",
  });
});

app.listen(port, () => {
  console.log("OSAS TODO SERVER IS READY");
});
