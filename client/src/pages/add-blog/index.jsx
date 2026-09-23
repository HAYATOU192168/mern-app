import { useContext, useEffect } from "react";
import classes from "./style.module.css";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
export default function AddNewBlog() {
  const { formData, setFormData, isEdit, setIsEdit } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

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
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  useEffect(() => {
    console.log(location);

    if (location.state) {
      const { getCurrentBlogItem } = location.state;
      setIsEdit(true);
      setFormData({
        title: getCurrentBlogItem.title,
        description: getCurrentBlogItem.description,
      });
    }
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
        </button>
      </div>
    </div>
  );
}
