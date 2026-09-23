const Blog = require("../model/blog.js");

// Fetch list of blogs
const fetchListsOfBlogs = async (req, res) => {
  try {
    const blogList = await Blog.find();

    if (!blogList || blogList.length === 0) {
      return res.status(404).json({ Message: "No blogs found" });
    }

    return res.status(200).json({ blogList });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to fetch blogs" });
  }
};

// Add a new blog
const addNewBlog = async (req, res) => {
  const { title, description } = req.body;

  const newlyCreatedBlog = new Blog({
    title,
    description,
    date: new Date(),
  });

  try {
    await newlyCreatedBlog.save();

    return res.status(200).json({ newlyCreatedBlog });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to add blog" });
  }
};

// Delete a blog
const deleteABlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);

    if (!findCurrentBlog) {
      return res.status(404).json({ message: "No blog found" });
    }

    return res.status(200).json({ message: "Successfully deleted" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Unable to delete. Please try again" });
  }
};

// Update a blog
const updateABlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  try {
    const currentBlogToUpdate = await Blog.findByIdAndUpdate(
      id,
      { title, description },
      { new: true },
    );

    if (!currentBlogToUpdate) {
      return res.status(404).json({ message: "Unable to update" });
    }

    return res.status(200).json({ currentBlogToUpdate });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Something went wrong while updating" });
  }
};

module.exports = {
  fetchListsOfBlogs,
  addNewBlog,
  deleteABlog,
  updateABlog,
};