import React from 'react'
import { useLocation } from 'react-router';
import { RecipeContext } from '../../App';

// Read about
// https://reactjs.org/docs/context.html
// https://reactjs.org/docs/hooks-reference.html#usecontext
// https://reactjs.org/docs/hooks-reference.html#uselocation
// https://reactjs.org/docs/hooks-intro.html
// https://reactjs.org/docs/hooks-reference.html#usecallback
// https://reactjs.org/docs/hooks-reference.html#useeffect
// https://reactjs.org/docs/hooks-reference.html#useref
// https://reactjs.org/docs/hooks-reference.html#usememo
// https://reactjs.org/docs/hooks-reference.html#usereducer [LowPrio]


function RecipeDetails() {
  const recipes = React.useContext(RecipeContext);
  const location = useLocation();
  const pathArray = location.pathname.split('/');
  const recipeIndex = pathArray[pathArray.length - 1];

  return (
    <center>
    <div className='recipeCard'>
        <p align='center'>
            <h1 className='name'>{recipes[recipeIndex].name}</h1>
            <h2 className='publisher'>{recipes[recipeIndex].publisher}</h2>
            <div >
              {recipes[recipeIndex].steps.map((step) => 
              <h4 className='steps'>{step}</h4>
              )}
            </div>
        </p>           
    </div>
    </center>
  );
}

export default RecipeDetails;
