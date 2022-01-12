import React from 'react'

function Contac() {
    return (
        <div className='contactCard'>
           Send an <a href='mailto:srbhsngwn@gmail.com'><h1>email</h1></a><br/>
            or drop a text on <h1>+91-8708543854</h1><br/>
            Find us on insta<h1 className='insta'> @sangwan.saurabh</h1>
            <div className='vl '></div>
            <div>
                <form style={{float:'right', marginRight:'170px', marginTop:'-120px'}} >
                    <h2 style={{color:'crimson', backgroundColor:'pink'}}>Your feedback means the world to us!</h2>
                    <h3 style={{display:'inline'}}>Username:&nbsp;</h3> <input type="text" /><br/><br/>
                    <h3 for='comments' style={{display:'inline', verticalAlign:'top'}} >Comments:</h3>&nbsp;
                    <textarea name='comments' id='comments'  rows="10" cols='28' /><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type='submit' className='feedbackButton'> SUBMIT </button>                     
                </form>
            </div>
        </div>
    )
}

export default Contac
