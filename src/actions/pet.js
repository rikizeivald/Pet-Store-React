import * as ActionTypes from "../ActionTypes";
import axios from "axios"
export const deletePet = (petId)=>{
    return{
        type:ActionTypes.PET_DELETED,
        payload:petId
    }
}

export const selectPet = (pet)=>{
    return{
        type:ActionTypes.PET_SELECTED,
        payload:pet
    }
}
export const addPet=(pet)=>{
return{
    type:ActionTypes.ADD_PET,
    payload:pet
 }
}
export const getAllPets=()=>{
    // return(dispatch)=>{     
    //     axios.get("http://localhost:8080/api/pets/getAllPets").then(response=>{
    //          console.log(response.data);
    //          dispatch(savePets(response.data))
    //     }).catch(err=>{
    //         console.log(err)
    //     })   
    // }
}
export const savePets=(pets)=>{
    return{
        type:ActionTypes.SAVE_PETS,
        payload:pets
    }
}
export const editPet=(pet,id)=>{
    return{
        type:ActionTypes.EDIT_PET,
        payload:id,
        add:pet
    }
}