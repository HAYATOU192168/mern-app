<<<<<<< HEAD

const express = require("express");

const blogRouter = express.Router();

const {addNewBlog, updateABlog, deleteABlog, fetchListsOfBlogs} = require("../controller/blog-controller")


blogRouter.get("/", fetchListsOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateABlog);
blogRouter.delete("/delete/:id", deleteABlog);

module.exports = blogRouter  
=======
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
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
