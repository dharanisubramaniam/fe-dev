const express = require("express");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();

const PORT = process.env.port || 5000;

app.use(cors(corsOptions));
/* app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization"
  );
  next();
}); */
app.use(express.json({ extended: false }));

app.use("/api/video", require("./api/video"));
app.use("/api/auth", require("./api/auth"));
app.use("/api/category", require("./api/category"));
app.use("/api/course", require("./api/course"));

app.get("/", (req, res) => {
  res.send(`server connected`);
});
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../courses/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

