
const express = require("express");

const blogRouter = express.Router();

const {addNewBlog, updateABlog, deleteABlog, fetchListsOfBlogs} = require("../controller/blog-controller")


blogRouter.get("/", fetchListsOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateABlog);
blogRouter.delete("/delete/:id", deleteABlog);

module.exports = blogRouter  