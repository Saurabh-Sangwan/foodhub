import React from "react";
import { MemoryRouter as Router, Switch, Route } from "react-router-dom";
import Recipe from "./components/Recipe/Recipe";
import Contac from "./components/Contac";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import "./App.css";

// create a array of recipes with values name, publisher, steps
const recipes = [
  {
    name: "Pizza",
    publisher: "Jonas",
    steps: ["1. Put the dough in the oven", "2. Put the pizza in the oven", "3. Put the pizza in the oven", "4. Put the pizza in the oven"]
  },
  {
    name: "Burger",
    publisher: "Jonas",
    steps: ["1. Put the dough in the oven", "2. Put the pizza in the oven", "3. Put the pizza in the oven", "4. Put the pizza in the oven"]
  },
  {
    name: "Pasta",
    publisher: "Jonas",
    steps: ["1. Put the dough in the oven", "2. Put the pizza in the oven", "3. Put the pizza in the oven", "4. Put the pizza in the oven"]
  }
];

const RecipeContext = React.createContext();


const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/" component={GetRecipe} exact /> */}
          <Route exact path="/">
            <RecipeContext.Provider value={recipes}>
              <Recipe />
            </RecipeContext.Provider>
          </Route>
          <Route path="/recipe">
            <RecipeContext.Provider value={recipes}>
              <RecipeDetails />
            </RecipeContext.Provider>
          </Route>
          <Route path="/contact" component={Contac} />
        </Switch>
      </Router>
    </div>
  );

}

export default App;

export { RecipeContext };
