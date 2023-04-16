import './App.css';
import {Link,Route,Switch} from 'react-router-dom';
import AddPet from './AddPet';
import AllPets from './AllPets';
import EditPet from './EditPet';
import {BrowserRouter as Router}from 'react-router-dom'
function App() {
  return (<div className="base">
  <div className="App">
      <h1 class="title">store of pets</h1>
        <nav>
            <ul>
                <p>
                    <Link className="link" to="/allPets">all pets</Link>
                </p> 
                <p>
                    <Link className="link" to="/addPet">add new pet</Link>
                </p>
                <p>
                    <Link to="/editPet"></Link>
                </p>
            </ul>
        </nav>
        <Switch>
        <Route path="/allPets">
            <AllPets/>
        </Route>
        <Route path="/addPet">
            <AddPet/>
        </Route>
        <Route path="/editPet">
            <EditPet/>
        </Route>
        
        </Switch>
        </div>
 </div>
  );
}
export default App;

