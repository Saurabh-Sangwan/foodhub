import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { RecipeContext } from "../../App";

const RecipeHome = (props) => {
  const history = useHistory();
  const recipes = React.useContext(RecipeContext);

  console.table(recipes);

  const renderRecipe = () => {
    return recipes.map((recipe, index) => {
      return (
        <div key={index}>
          <div className="recipeCard">
            <div align="center">
              <h3>{recipe.name}</h3>
              <p>{recipe.publisher}</p>
              <button onClick={
                () => {
                  console.log(index);
                  history.push(`/recipe/${index}`)
                }
              }>
                Details
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <h1>Recipes</h1>
      <div className="recipe-container">{renderRecipe()}</div>
    </>
  );
};

export default RecipeHome;
