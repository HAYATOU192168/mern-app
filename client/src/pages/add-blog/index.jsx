import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/index.jsx";
import classes from "./styles.module.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
export default function AddNewBlog() {
  const { formData, setFormData, isEdit, setISEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSaveBlogToDataBase() {
    const response = isEdit
      ? axios.put(`http://localhost:5000/api/blogs/update/${location.state.getCurrentBlogItem._id}`, {
          title: formData.title,
          description: formData.description,
        })
      : await axios.post("http://localhost:5000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });
    const result = response.data;
    console.log(result);

    if (result) {
        setISEdit(false)
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }
  console.log(formData);

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlogItem } = location.state;
      setISEdit(true);
      setFormData({
        title: getCurrentBlogItem.title,
        description: getCurrentBlogItem.description,
      });
    }
  }, [location, setFormData, setISEdit]);

  

  return (
    <div className={classes.formWrapper}>
      <h1>{isEdit ? "Edit a blog" : "Add a blog"}</h1>
      <div className={classes.formWrapper}>
        <input
          name="title"
          type="text"
          placeholder="Enter blog title"
          id="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <textarea
          name="description"
          placeholder="Enter blog description"
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
        />
        <button onClick={handleSaveBlogToDataBase}>
          {isEdit ? "Edit a blog" : "Add a blog"}
        </button>
      </div>
    </div>
  );
}
