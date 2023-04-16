import { deletePet,selectPet } from '../actions'
import './Pet.css'
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import EditPet from './EditPet';
import { useState } from 'react';
const Pet=(props)=> {
    const [deletePet, setDeletePet] = useState(false);
    const petEdit=(pet)=>{
       props.setIsEdit(true);
       console.log(pet)
       props.selectPet(pet);
    }
    const petDel=(id)=>{
        setDeletePet(true);
        console.log(id)
        props.deletePet(id)
    }
    
    return (deletePet ||  <div className="frame">
        <h1 className="pet">id:{props.id}</h1>
        <p className="pet">age:{props.age} price:{props.price} species:{props.species} status:{props.status}</p>
        <input type="button" className="button" onClick={()=>{petDel(props.id)}} value="delete"/>
        <input type="button" className="button" onClick={()=>{petEdit(props.item)}} value="edit"/>
        </div>)
}
export default connect(null,{deletePet,selectPet})(Pet);