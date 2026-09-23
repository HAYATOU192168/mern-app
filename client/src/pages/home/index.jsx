import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./style.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
    const navigate = useNavigate()

  async function fetchListOfBlog() {
    setPending(true);
    const response = await axios.get(
      "https://mern-app-server-2yyh.onrender.com/api/blogs",
    );
    const result = await response.data;


    // console.log(result);

    if (result && result.blogList&& result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false)
       setBlogList([])
    }
  }
  async function handleEdit(getCurrentBlogItem){
         console.log(getCurrentBlogItem);
         navigate("/add-blog", {state: {getCurrentBlogItem}})
         
  }
  async function handleDeleteBlog(getCurrentId) {
    const response = await axios.delete(
      `https://mern-app-server-2yyh.onrender.com/api/blogs/delete/${getCurrentId}`,
    );
    const result = await response.data;
    if (result?.message) {
      fetchListOfBlog();
      // navigate(0)
     
    }
  }
  useEffect(() => {
    fetchListOfBlog();
  }, []);
  return (
    <div className={classes.wrapper}>
      <h1>blog list</h1>
      {pending ? (
        <h1>loading blog ! please wait</h1>
      ) : (
        <div className={classes.bloglist}>
          {blogList && blogList.length? blogList.map((blogItem) => (
            <div key={blogItem._id}>
              <p>{blogItem.title}</p>
              <p>{blogItem.description}</p>
              <FaEdit onClick={()=> handleEdit(blogItem)} size={30} />
              <FaTrash
                onClick={() => handleDeleteBlog(blogItem._id)}
                size={30}
              />
            </div>
          )): <h3>No blog added</h3>}
        </div>
      )}
    </div>
  );
}
