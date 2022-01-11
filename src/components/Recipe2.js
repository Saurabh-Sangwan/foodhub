import React from 'react'
import {recipes} from './Data'

function Recipe2() {
    return (
        <center>
        <div className='recipeCard'>
           <p align='center'>
               <h1 className='name'>{recipes[1].name}</h1>
               <h2 className='publisher'>{recipes[1].publisher}</h2>

               <div >

                   {recipes[1].steps.map((step) => 
                   <h4 className='steps'>{step}</h4>
                   )}
                    {/* <h3 className={size[3]}>
                        <input type="checkbox"  onClick={() => size.push("checked")} />{recipes[0].steps[0]}  
                        {size[3]}                      
                    </h3>
                    <h3 className={size}>
                        <input type="checkbox"  onClick={() => setSize("checked")}/>{recipes[0].steps[1]}
                    </h3>
                    <h3 className={size}>
                        <input type="checkbox"  onClick={() => setSize("checked")}/>{recipes[0].steps[2]}
                    </h3>
                    <h3 className={size}>
                        <input type="checkbox"  onClick={() => setSize("checked")}/>{recipes[0].steps[3]}
                    </h3> */}
               </div>
            </p>           
        </div>
        </center>
    )

}


export default Recipe2
