import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { ContactCard } from "../component/ContactCard";


export const EditContact = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { store, actions} = useContext(Context)
  const [contact, setContact] = useState (null)

  useEffect(() => {
    const contactToEdit = store.ContacList.find(contact => contact.id == params.id)
    setContact(contactToEdit)
  },[store.ContacList])

  const handleChange = (e) => {
    setContact({...contact,[e.target.name]:e.target.value})
    navigate("/")
  }
  const handleSumit = async (e) => {
    e.preventDefault()
  actions.editContact(contact,params.id)
  navigate("/")
  }


  /* const handleSumit = async (e) => {
    e.preventDefault()
    const response = await fetch('https://playground.4geeks.com/contact/agendas/Hvaxquez/contacts/${params.id}',
      {
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        }
      }
    )
    const data = await response.jason()
  } */
 
  return (
    
      <form onSubmit={handleChange}>
       <div className="mb-3">
            <label for="name" clasName="form-label">Name....</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" clasName="form-control" id="name" name="name"aria-describedby="name"/>

    
     </div>
     <div className="mb-3">
            <label for="email" clasName="form-label">Email.....</label>
            <input onChange={(e)=>setEmail(e.target.value)}type="text" clasName="form-control" id="email" name="email"/>
     </div>

     <div className="mb-3">
            <label for="email" clasName="form-label">Phone...</label>
            <input onChange={(e)=>setPhone(e.target.value)}type="text" clasName="form-control" id="phone" name="phone"/>
     </div>
     
     <div className="mb-3">
            <label for="email" clasName="form-label">Address</label>
            <input onChange={(e)=>setAddress(e.target.value)}type="text" clasName="form-control" id="address" name="address"/>
     </div>
      
      <button onClick={handleSumit} type="submit"  clasName="btn btn-info">Submit</button>
      
    
     </form>
     
    
  )
  
}