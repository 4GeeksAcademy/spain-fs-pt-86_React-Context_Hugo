import React, {useContext, useEffect,useState} from "react";
import { Context } from "../store/appContext";
import { FaBomb } from "react-icons/fa6";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export const ContactCard = ({contact}) => {
    const { store, actions} = useContext(Context);
  

    return(
        <div className="card mb-3" style={{maxwidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSW8mN75LTT-soGRUF0PMRZJk53HcSSuNmw&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name: </h5><span>{contact.name}</span>
        <h5 className="card-title">Phone: </h5><span>{contact.phone}</span>
        <h5 className="card-title">Email: </h5><span>{contact.email}</span>
        <h5 className="card-title">Address: </h5><span>{contact.address}</span>
      <div>
          <Link to={`/edit/${contact.id}`}>
          <button  >EDIT</button>
          </Link>
         
        <button onClick={() => actions.elimContact(contact.id)}>ELIMINAR</button>
      
      </div>
      </div>
    </div>
  </div>
</div>
    )
}