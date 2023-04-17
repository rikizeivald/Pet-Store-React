import {selectPet,deletePet} from '../actions/pet';
import { connect } from 'react-redux';
import Pet from './Pet';
import { Link, Redirect, Route ,useRouteMatch} from 'react-router-dom';
import AddPet from './AddPet';
import { useState } from 'react';
import { addPet } from '../actions';
import EditPet from './EditPet';
const AllPets = (props)=> {
    console.log(props)
    const [name,setName]=useState();
    const [id,setId]=useState();
    const [arrPet,setArrPet]=useState(props.petArr);
    const [isPet,setIsPet]=useState(false)
    const [isEdit,setIfEdit]=useState(false)
    console.log(arrPet+"arrPet")
    const setIsEdit=()=>{
      setIfEdit(true)
     
    } 
    const finishEdit=()=>{
        console.log("hello")
        setArrPet(props.petArr)
    }
    const addPet=()=>{
       setName("add")
    }
    const updateId=(e)=>{
       setId(e.target.value)
    }
    const search=()=>{
        let arrPet2=props.petArr.filter(t=>t.id==id);
        setArrPet(arrPet2)
        setIsPet(true)
        
    }
    const close=()=>{
        setIsPet(false)
        setArrPet(props.petArr)
    }

    if(isPet){
       return<div>
          <input type="button" onClick={close} value="back to all pets"/>
          {arrPet.map((item,index)=>{
             console.log(item)
         return <div  key={index} ><Pet setIsEdit={setIsEdit} finish={finishEdit} id={item.id} age={item.age} 
         price={item.price} species={item.species} status={item.status} item={item} /></div>})}
       </div> 
    }
    if(isEdit){
        return(<div>
            <EditPet set={setIfEdit} finish={finishEdit}/>
        </div>)
    }
    return ( <>
     <input type="number" placeholder="search by Id" onChange={updateId}/> <input type="button" onClick={search} value="search"/>
     {
         console.log(arrPet),
         arrPet.map((item,index)=>{
         console.log(item)
         return <div  key={index} ><Pet setIsEdit={setIsEdit} finish={finishEdit} id={item.id} age={item.age} price={item.price} species={item.species} status={item.status} item={item} /></div>
         })
     }
      
     </> );
}


const myMapStateToProps=(state)=>{
    return{
        petArr:state.pet.petList,
        pet:state.pet.selectPet
    }
}
export default  connect(myMapStateToProps,{selectPet,deletePet})(AllPets);
