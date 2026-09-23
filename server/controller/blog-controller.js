const mongoose = require("mongoose");
const Blog = require("../model/blog.js");

<<<<<<< HEAD
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
=======

//fetch list of blogs//
//add a new blog//
// update blog//
//delete blog//

//fetch list of blogs//
const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(e);
  }
  if (!blogList || blogList.length === 0) {
    return res.status(404).json({ Message: "No blog found" });
  }
  return res.status(200).json({ blogList });
};
//add a new blog//

>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();

<<<<<<< HEAD
  const newlyCreateBlog = new Blog({
=======
  const newlCreateBlog = new Blog({
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
    title,
    description,
    date: currentDate,
  });
<<<<<<< HEAD

  try {
    await newlyCreateBlog.save();
=======
  try {
    await newlCreateBlog.save();
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
  } catch (e) {
    console.log(e);
  }

  try {
<<<<<<< HEAD
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
=======
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlCreateBlog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.status(500).json({ message: e });
  }
  return res.status(200).json({ newlCreateBlog });
};

//delete blog//

const deleteABlog = async (req, res)=> {
       const id = req.params.id
       try{
        const findCurrentBlog = await Blog.findByIdAndDelete(id);
        if(!findCurrentBlog){
            return res.status(404).json({message: "Blog not found"})
        }
        return res.status(200).json({message: "Successfully! deleted"})
       }catch(e){
        console.log(e)
        return res.status(500).json({message: "unable to delete the blog please! try again"})
       }
}

// update blog//

 const updateABlog = async (req, res)=> {
       const id = req.params.id
       const {title, description} = req.body
       let currentBlogToUpdate;

       try{
        currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
            title, description
        })

       }catch(e){
         console.log(e)
         return res.status(500).json({message: "Somethings went wrong while updating! please try again"})
       }

       if(!currentBlogToUpdate){
           return res.status(404).json({ message: "unable to update" });
       }
       return res.status(200).json({currentBlogToUpdate})  
 }

 module.exports = {fetchListOfBlogs, addNewBlog, deleteABlog, updateABlog}
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
