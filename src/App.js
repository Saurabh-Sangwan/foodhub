import GetRecipe from "./components/GetRecipe";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Recipe1 from "./components/Recipe1";
import Recipe2 from "./components/Recipe2";
import Recipe3 from "./components/Recipe3";
import Navbar from "./components/Navbar";


function App() {
  
  return (
    <div>
    
    <div>
          
        <Switch>
        
        <Route path="/" component={GetRecipe} exact />
        <Route path="/recipe1" component={Recipe1} />
        <Route path="/recipe2" component={Recipe2} />
        <Route path="/recipe3" component={Recipe3} />                       
        </Switch>
    </div>
    </div>
  );

}

export default App;
