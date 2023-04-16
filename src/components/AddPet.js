import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPet } from '../actions';
import axios from "axios";
import {Redirect} from 'react-router-dom'
class AddPet extends Component {
    state = {
        id:0,
        age:0,
        price:0,
        species:"",
        status:"",  
    }
    keepChanges=(e)=>{
          let value=e.target.value;
          let x=e.target.name;
          let type=e.target.type;
          console.log(type)
          this.setState({[x]:value})
    }
    add=(e)=>{
      e.preventDefault();
      const newPet={id:this.state.id,age:this.state.age,price:this.state.price
      ,species:this.state.species,status:this.state.status}
      console.log(newPet)
      this.props.addPet(newPet);
      this.setState({finish:true})
    }
    render(){if(this.state.finish){
                 return  <Redirect to="/allpets"/>
             }
            if(this.state.close){
              return null;
            }
          return<form onSubmit={this.add}>
            <input type="number" placeholder="id" onChange={this.keepChanges} name="id"/>
            <input type="number" placeholder="age" onChange={this.keepChanges} name="age"/>
            <input type="number" placeholder="price" onChange={this.keepChanges} name="price"/>
            <input type="text" placeholder="status" onChange={this.keepChanges} name="status"/>
            <select value={this.state.species} onChange={this.keepChanges} name="species">
                  <option value="placeholder">species</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
            </select>
            <input type="submit"/>
           </form> }
}
const mapStateToProps = (state) => {
    return {
    
    };
}
export default connect(mapStateToProps, { addPet })(AddPet);