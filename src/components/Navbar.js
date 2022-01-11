import React from 'react'

function Navbar() {
    return (
        <div >
          
            <ul className='navbar'>
                <li><b><a className='navlink' href='/'>{`FOODHUB \u00A0`}</a></b></li>
                <li><a href='/' className='navlink'>{`HOME \u00A0`}</a></li>
                <li><a className='navlink'>{`CONTACT US \u00A0`}</a></li>
            </ul>
        </div>
    )
}

export default Navbar
