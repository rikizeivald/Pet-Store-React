import {editPet} from '../actions/pet';
import { connect } from 'react-redux';
import React, { useState } from 'react';
const EditPet =(props)=>  {
    const [id, setId] = useState(props.pet.id);
    const [age, setAge] = useState(props.pet.age);
    const [price, setPrice] = useState(props.pet.price);
    const [species, setSpecies] = useState(props.pet.species);
    const [status, setStatus] = useState(props.pet.status);

    const  changeSpecies=(e)=>{
        let value=e.target.value;
        setSpecies(value)
   }
    const  changeAge=(e)=>{
        let value=e.target.value;
        setAge(value)
    }
    const  changePrice=(e)=>{
        let value=e.target.value;
        setPrice(value)
    }
    const  changeStatus=(e)=>{
        let value=e.target.value;
        setStatus(value)
    }
    const edit=(e)=>{
      e.preventDefault();
      const newPet={age:age,price:price,species:species,status:status}
      console.log(newPet+"bew")
      props.editPet(newPet,newPet.id);
      props.set(false)
      console.log(props)
      props.finish()
    }
   return(<div>
       <form onSubmit={edit}>
           age:<input type="number" placeholder={props.pet.age} onChange={changeAge} name="age"/>
           price:<input type="number" placeholder={props.pet.price} onChange={changePrice} name="price"/>
           status:<input type="text" placeholder={props.pet.status} onChange={changeStatus} name="status"/>
           species:<select placeholder={props.pet.species} onChange={changeSpecies} name="species">
                    <option value="male">male</option>
                    <option value="female">female</option>
                   </select>
           <input type="submit"/>
       </form>
   </div>
)}
const myMapStateToProps=(state)=>{
    return{
        pet:state.pet.selectedPet 
    }
}
export default  connect(myMapStateToProps,{editPet})(EditPet);