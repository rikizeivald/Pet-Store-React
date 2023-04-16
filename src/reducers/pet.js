import * as ActionTypes from "../ActionTypes";
import axios from "axios";
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:8081', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
const initialState ={
    petList:[
     {
          id:1,
          age:5,
          price:200,
          species:"male",
          status:"health"
      },
      {
          id:2,
          age:20,
          price:600,
          species:"male",
          status:"strong"
      },
      {
          id:3,
          age:1000,
          price:800,
          species:"famale",
          status:"small"
      } ]
    ,
  selectedPet:null
}
export const petReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.PET_DELETED:
          // axios.delete("http://localhost:8080/api/pets/deletePet"+action.payload).then(response=>{
          //     console.log(response.data)
          // })
          let arr=state.petList.filter(t=>t.id!==action.payload);
          return {
                ...state,
                petList:arr,                
          }
        case ActionTypes.PET_SELECTED:
          return{
              ...state,
                selectedPet:action.payload,
          }
        case ActionTypes.SAVE_PETS:
          return{
           ...state,
           petList:action.payload
          }     
        case ActionTypes.ADD_PET:
          // axios.post("http://localhost:8081/api/pets/createPet",action.payload).then(response=>{
          //     console.log(response.data)
          // })
          return{
            ...state,
            petList:[...state.petList,action.payload]
          }
        case ActionTypes.EDIT_PET:
          let list=state.petList.filter(t=>t.id!==action.payload);
          list.push(action.add)
          // axios.put("http://localhost:8081/api/pets/updatePet"+action.payload,actio.add).then(response=>{
          //   console.log(response.data) })
          return{
            ...state,
            petList:list
          }
    }
    return state;
}
