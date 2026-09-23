import classes from "./styles.module.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className={classes.header}>
      <h3>Mern Blog App</h3>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/add-blog"}>Add-Blog</Link>
        </li>
      </ul>
    </div>
  );
}
