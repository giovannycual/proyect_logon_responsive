import React, { useState } from 'react'
import './Loginform.css'

const LoginForm=()=>{
    const [popupStyle,showPopup]=useState("hide")
    const popup=()=>{
        showPopup("login-popup")
        setTimeout(()=>showPopup("hide"),3000)
        }
    return(
        <div className='cover'>
            <h1>Login Form</h1>
            <input type="text" placeholder='USERNAME'/>
            <input type="password" placeholder='PASSWORD'/> 
            <div className='login-btn' onClick={popup}>ENTER</div>
            <p className='text'>or login using</p>
            <div className='alt-login'>
                <div className='facebook'>
                    </div>
                <div className='google'>
                    </div>        
                </div>         
            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or Password incorrect</p>
            </div>
        </div>
        
    )
}
export default LoginForm