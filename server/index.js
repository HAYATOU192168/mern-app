
<<<<<<< HEAD


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
=======
const express = require("express");
const cors = require("cors");
const blogRoute = require("./route/blog-route") 
require("./DB/index.js")
const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/blogs", blogRoute) 
app.get("/api", (req, res)=> {

    res.send("hello world")
})

app.listen(process.env.PORT || 5000, () => console.log("server is running"));



  
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
