import React, {useEffect,useState,useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";



export const AddContact = () => {
  const {actions,store} = useContext(Context);
  const navigate = useNavigate()
  const [name, setName] = useState(''); 
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [addres, setAddres] = useState('');


  const handleContact = () => {
  actions.addContact(name,phone,email,addres)
  navigate("/")
  }
    return (<>
      <div>
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="full name"/>
        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email"/>
        <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="phone"/>
        <input onChange={(e)=>setAddres(e.target.value)} type="text" placeholder="address"/>
        <button onClick={handleContact}>Save</button>
        {/* <link tg='/'>
              <span>or get back to contact</span>
        </link> */}
      </div>
    
    </>)
}