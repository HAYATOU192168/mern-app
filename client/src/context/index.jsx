



import {createContext, useState} from "react"
export const GlobalContext = createContext()

function Globalstate({children}){

    const [formData, setFormData] = useState({
        title: "",
         description: ""
    })
    const [blogList, setBlogList] = useState([])
    const [pending, setPending] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
   return (
     <GlobalContext.Provider value={{isEdit, setIsEdit, blogList, setBlogList,pending, setPending, formData, setFormData }}>
       {children}
     </GlobalContext.Provider>
   );
}
export default Globalstate;