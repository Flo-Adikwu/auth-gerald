import React, { useState } from 'react';
import logo from '../asset/images/logo.png';
import { TextField, Button } from '@mui/material';
import "./login.css";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [value, setValue] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const onLogin =()=>{
        navigate("/profile")

    }

    return (
        <div className="container">
            <div className="sub-container">
                <div className="top-section">
                <img src={logo} alt="logo" className="logo" />
                <p className="heading">Join thousands of learners from around the world </p>
                <p className="master-web">Master web development by making real-life projects. There are multiple paths for you to choose</p>
                </div>
                <div className="bottom-section">
                <div className="form">
                    <TextField id="outlined-basic" label="Email" variant="outlined" className="email" value={value}/>&nbsp;
                    <TextField id="outlined-basic" label="Password" variant="outlined" className="password" password={password}/>&nbsp;
                    <Button variant="contained" className="button" style={{textTransform: "none", fontSize: "16px"}} onClick={onLogin}>Start coding now</Button>
                </div>
                
                <p className='grey-text grey-text-one'>or continue with these social profile</p>
                <div className="socials">
                    <GoogleIcon className='icon'/>
                    <FacebookIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                    <GitHubIcon className='iconi'/>

                </div>
                <p className='grey-text grey-text-two'>Already a member? <span><a href="#" className='login-link'>Login</a></span></p>
                </div>
            </div>
            <div className="bottom-items">
                <p className='grey-text'>Created by <a href="#" className="username">username</a></p>
                <p className='grey-text'>devChallenges.io</p>
            </div>

        </div>
    )

}

export default Login;