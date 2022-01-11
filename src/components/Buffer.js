import React from 'react'

function Buffer(props) {
    const {recipe} = props
    // for(var i=0;i<recipe.length;i++){
       console.log(recipe) 
    // }
    
    return (
        <div>
            {recipe[0]}
        </div>
    )
}

export default Buffer
