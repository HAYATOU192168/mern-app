

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/header";
import AddNewBlog from "./pages/add-blog";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
