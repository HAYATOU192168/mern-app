import { createContext, useState } from "react";
export const GlobalContext =  createContext();

function GlobalState({ children }) {

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })

  const [blogList, setBlogList] = useState([]);
  const [pending, setPending] = useState(false);
  const [isEdit, setISEdit] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        pending,
        setPending,
        blogList,
        setBlogList,
        isEdit,
        setISEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
    
