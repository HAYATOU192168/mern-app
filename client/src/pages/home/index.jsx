import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import classes from "./styles.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { pending, setPending, blogList, setBlogList } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  async function handleDeleteBlog(getCurrentId) {
 const response = await axios.delete(
   `https://mern-app-server-2yyh.onrender.com/api/blogs/delete/${getCurrentId}`,
 );
    const result = response.data;
    if (result?.message) {
      fetchListOfBlogs();
      // navigate(0)
    }
  }

  async function fetchListOfBlogs() {
    setPending(true);
   const response = await axios.get(
     "https://mern-app-server-2yyh.onrender.com/api/blogs",
   );
    const result = response.data;

    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }
  function handleEdit(getCurrentBlogItem) {
    console.log(getCurrentBlogItem);
    navigate("/add-blog", {
      state: { getCurrentBlogItem },
    });
  }

  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  return (
    <div className={classes.wrapper}>
      <h1>Blog Lists</h1>
      {pending ? (
        <h3>loading blogs! please wait</h3>
      ) : (
        <div className={classes.blogList}>
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div key={blogItem._id}>
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>
                <FaEdit onClick={() => handleEdit(blogItem)} size={30} />
                <FaTrash
                  onClick={() => handleDeleteBlog(blogItem._id)}
                  size={30}
                />
              </div>
            ))
          ) : (
            <h3>No blog! added</h3>
          )}
        </div>
      )}
    </div>
  );
}
