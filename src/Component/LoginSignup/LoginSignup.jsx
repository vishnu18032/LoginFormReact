import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/email.png';
import email_icon from '../Assets/password.png';
import password_icon from '../Assets/person.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");

    const handleActionToggle = (selectedAction) => {
        setAction(selectedAction);
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Sign Up" && (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name' />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action === "Login" && (
                <div className="forgot-password">Lost Password? <span>Click here!!</span></div>
            )}
            <div className="submit-container">
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => handleActionToggle("Sign Up")}>Sign Up</div>
                <div className={action === "Login" ? "submit active" : "submit"} onClick={() => handleActionToggle("Login")}>Login</div>
                {action === "Login" && (
                    <div className="active-indicator"></div>
                )}
            </div>
        </div>
    );
}

export default LoginSignup;
