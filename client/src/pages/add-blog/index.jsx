import { useContext, useEffect } from "react";
<<<<<<< HEAD
import classes from "./style.module.css";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
export default function AddNewBlog() {
  const { formData, setFormData, isEdit, setIsEdit } =
=======
import { GlobalContext } from "../../context/index.jsx";
import classes from "./styles.module.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
export default function AddNewBlog() {
  const { formData, setFormData, isEdit, setISEdit } =
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

<<<<<<< HEAD
  console.log(formData);

  async function handleSaveBlogToData() {
    const response = isEdit
      ? await axios.put(
          `https://mern-app-server-2yyh.onrender.com/api/blogs/update/${location.state.getCurrentBlogItem._id}`,
          {
            title: formData.title,
            description: formData.description,
          },
        )
      : await axios.post(
          "https://mern-app-server-2yyh.onrender.com/api/blogs/add",
          {
            title: formData.title,
            description: formData.description,
          },
        );

    const result = response.data;

    console.log(result);
    if (result) {
      setIsEdit(false)
=======
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
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }
<<<<<<< HEAD

  useEffect(() => {
    console.log(location);

    if (location.state) {
      const { getCurrentBlogItem } = location.state;
      setIsEdit(true);
=======
  console.log(formData);

  useEffect(() => {
    console.log(location);
    if (location.state) {
      const { getCurrentBlogItem } = location.state;
      setISEdit(true);
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
      setFormData({
        title: getCurrentBlogItem.title,
        description: getCurrentBlogItem.description,
      });
    }
<<<<<<< HEAD
  }, [location]);

  return (
    <div className={classes.wrapper}>
      <h1>{isEdit ? "edit a blog" : "add a blog"}</h1>
      <div className={classes.formWrapper}>
        <input
          name="title"
          placeholder="Enter Blog title"
          id="title"
          type="text"
=======
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
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
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
<<<<<<< HEAD
          placeholder="Enter type of description"
          id="description"
          value={formData.description}
          onChange={(event) =>
            setFormData({
              ...formData,
              description: event.target.value,
            })
          }
        />
        <button onClick={handleSaveBlogToData}>
          {isEdit ? "edit ablog" : "add a blog"}
=======
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
>>>>>>> 1b127420559e62e86688825544bdf43f06173a0b
        </button>
      </div>
    </div>
  );
}
