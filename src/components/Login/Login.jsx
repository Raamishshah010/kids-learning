import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
const Login = () => {
    return (
        <>
        <div className="login">
            <div className="loginForm">
                <div className="loginLogo">
                    <img src="/Logo.svg" alt="" />
                </div>
                <div className="loginInputs">
                    <h5>Welcome To Kid Music Helper</h5>

                    <div className="loginInput">
                        <input type="text" placeholder="Email" />
                    </div>

                    <div className="loginInput">
                        <input type="text" placeholder="Password" />
                    </div>

                    <div className="loginBtn">
                        <Link to="/dashboard"  className="btn btn-login">Login</Link>
                    </div>

                </div>
            </div>
        </div>
        
        </>
    )
}

export default Login