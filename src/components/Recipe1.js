import React from 'react'
import {recipes} from './Data'
import {useState, useEffect} from 'react'

function Recipe1() {
    // const [size, setSize] = useState(["","","2"])
    // var checkstyle = ["","","",""]
    
    // function toggleClass(num) {
    //     checkstyle[num] = "checked"
    // }

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [checkstyle])
         
    return (
        <center>
        <div className='recipeCard'>
           <p align='center'>
               <h1 className='name'>{recipes[0].name}</h1>
               <h2 className='publisher'>{recipes[0].publisher}</h2>

               <div >

                   {recipes[0].steps.map((step) => 
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

export default Recipe1
