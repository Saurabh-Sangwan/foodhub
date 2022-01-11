import React from 'react'
import {recipes} from './Data'

function Recipe3() {
    return (
        <center>
        <div className='recipeCard'>
           <p align='center'>
               <h2 className='name'>{recipes[2].name}</h2>
               <h3 className='publisher'>{recipes[2].publisher}</h3>

               <div >

                   {recipes[2].steps.map((step) => 
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


export default Recipe3
