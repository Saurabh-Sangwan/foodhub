import React from 'react'
import {useState} from 'react'
import {recipes} from './Data'


function GetRecipe(props) {
   const [size, setSize] = useState("")
   
   
    function toggleClass(){ setSize("checked") }
           return (
            <div> 
                             
                    {recipes.map((recipe, index) =>(
                        <div className='card'>
                        
                        <p  key={index} className='name' ><h2>{`${recipe.name}`} </h2></p>                     
                        <p className='publisher'><h3>{recipe.publisher}</h3></p>                        
                        <p className='steps'>{recipe.steps[0]}</p>
                        <p>
                            <a className='link' href={`/recipe${index + 1}`}>see more...</a>
                        </p>
                        
                        
                        </div>
                                  
                    ))}  
                
                 
                
                                              
            </div>
        )
}

export default GetRecipe
