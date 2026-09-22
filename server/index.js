
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

app.listen(5000, ()=> console.log("server running on port 5000"))



  
