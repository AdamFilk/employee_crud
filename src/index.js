const app = require("./app");

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});
app.listen(port, () => {
  console.log("Server is listening at " + port);
});
