const mongoose = require("mongoose");
const Blog = require("../model/blog.js");

// ftech lists of blogs
//add a new blog
//delete a blog
//update a blog

// ftech lists of blogs
const fetchListsOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (err) {
    console.log(err);
  }

  if (!blogList) {
    return res.status(404).json({ Message: "No blogs found" });
  }
  return res.status(200).json({ blogList });
};

//add a new blog
const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

  const newlyCreateBlog = new Blog({
    title,
    description,
    date: currentDate,
  });

  try {
    await newlyCreateBlog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = mongoose.startSession();
    session.startTransaction();
    await newlyCreateBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.send(500).json({ message: e });
  }
  return res.status(200).json({ newlyCreateBlog });
};
//delete a blog
const deleteABlog = async (req, res) => {
  const id = req.params.id;
  
  try{
    const findCurrentBlog = await Blog.findByIdAndDelete(id)
     if(!findCurrentBlog){
        return res.status(404).json({message: "No blog found"})
     }

     return res.status(200).json({message: "successfully deleted"})
  } catch(e){
    console.log(e)
    return res.status(500).json({message: "unable to delete! pleasse try again"})
  }
};

//update a blog

const updateABlog = async(req, res) => {
   
    const id = req.params.id;
    const {title, description}= req.body;
    let currentBlogToUpdaate
    try{
        currentBlogToUpdaate = await Blog.findByIdAndUpdate(id, {
            title, description

        })
    }catch(e){
        console.log(e)
        return res.status(500).json({message: "something went wrong while updating ! please try again"})
    }
   if(!currentBlogToUpdaate){
     return res.status(500).json({message: "unable to update"})
   }

   return res.status(200).json(currentBlogToUpdaate)

}

module.exports = {fetchListsOfBlogs,addNewBlog, deleteABlog, updateABlog};