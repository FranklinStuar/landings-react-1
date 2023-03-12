import React from 'react'
import { PageContext } from './PageContext'

const AdminContext = React.createContext()

function AdminProvider(props) {
  const {page, setPage} = React.useContext(PageContext);
  // Form to create an automatic page
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState("")
  const [typeCompany,setTypeCompany] = React.useState("")
  const [description,setDescription] = React.useState("")
  
  const onSubmitForm = (e)=>{
    e.preventDefault(); 
    console.log("submit")
  }

  return(
    <AdminContext.Provider
      value={{
        name, setName,
        email, setEmail,
        typeCompany, setTypeCompany,
        description, setDescription,
        onSubmitForm,
        page, setPage,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  )
}
export {AdminContext, AdminProvider}