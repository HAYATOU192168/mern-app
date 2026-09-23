const express = require("express");
const cors = require("cors");

require("./DB/index.js");

const blogRouter = require("./route/blog-route.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello from the API!");
});

app.listen(process.env.PORT || 5000, () => console.log("server is running"));