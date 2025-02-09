import React, {useContext, useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";
import { editContac } from "./edit-contact";

export const ContacList = () => {
    const { action,store} = useContext(Context);
    

      return( <> 
      <div>
        <Link to={'/addcontact'}>
        <button>Add new contact</button>
        </Link>
        
        <div>
           { store.ContacList.map((contact,index)=> {
            console.log(contact)

            return(
            <ContactCard
           key={index}
           contact={contact}
           />)})}

        </div>
      </div>
      </>)
}
