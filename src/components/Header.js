import { useState } from "react";
import React from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () =>{
    const [loginBtn,setLoginBtn]=useState("Login");

    return(
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} alt='logo'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="button" onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>

            </div>
            

        </div>
    )
}

export default Header;

// onClick={()=>{
//     (loginBtn === "Login")? setLoginBtn("Logout") : setLoginBtn("Login");
// }}