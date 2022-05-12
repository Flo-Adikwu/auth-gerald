import React from 'react';
import Navbar from '../components/navbar';
import './profile.css';
import logo from '../asset/images/logo192.png';
import { Button } from '@mui/material';




const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="cntainer">
                <div className='headng'>
                    <span className='personal-info'>Personal Info</span><br/>
                    <span className='basic'>Basic info like your name and photo</span>
                </div>
                <div className="sub-cntainer">
                    <div className='partition-div'>
                    <div>
                        <span className='profile'>Profile</span><br/>
                        <span className='grey'>Some info may be visible</span>
                    </div>
                        <Button variant="outlined" className="button">Edit</Button>
                    </div><hr />
                    <div className='sec'>
                        <p className='grey'>PHOTO</p>
                        <img src={logo} alt="img" className='left' />
                    </div><hr />
                    <div className='sec'>
                        <p className='grey'>NAME</p>
                        <p className='left'>Xanthe Neal</p>
                    </div><hr />
                    <div className='sec'>
                        <p className='grey'>BIO</p>
                        <p className='left'>I am a software developer and a big fan of devchallenges...</p>
                    </div><hr />
                    <div className='sec'>
                        <p className='grey'>PHONE</p>
                        <p className='left'>908249274292</p>
                    </div><hr />
                    <div className='sec'>
                        <p className='grey'>EMAIL</p>
                        <p className='left'>xanthe.neal@gmail.com</p>
                    </div><hr />
                    <div className='sec'>
                        <p className='grey'>PASSWORD</p>
                        <p className='left'>************</p>
                    </div>
                </div>
                <div className="bottm-section">
                    <p className='grey-text'>Created by <a href="#" className="username">username</a></p>
                    <p className='grey-text'>devChallenges.io</p>
                </div>
            </div>
        </>
    )
}

export default Profile;