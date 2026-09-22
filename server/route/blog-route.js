const express = require("express");
const blogRoute = express.Router();

const {
  fetchListOfBlogs,
  addNewBlog,
  deleteABlog,
  updateABlog,
} = require("../controller/blog-controller.js");


blogRoute.get("/", fetchListOfBlogs);
blogRoute.post("/add", addNewBlog);
blogRoute.delete("/delete/:id", deleteABlog);
blogRoute.put("/update/:id", updateABlog);

module.exports = blogRoute;