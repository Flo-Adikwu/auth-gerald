import React, { useState } from 'react';
import Navbar from '../components/navbar';
import '../styles/profile.css';
import logo from '../asset/images/logo192.png';
import { Button } from '@mui/material';
import Edit from './edit';
import ModalComp from '../components/modal';




const Profile = (props) => {
    const [edit, setEdit]= useState(false);
    const [profile, setProfile]= useState(true);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const onEdit=()=>{
        setEdit(true);
        setProfile(false)
    }

    const onClickBack=()=>{
        setEdit(false);
        setProfile(true)
    }

    const onChangePassword=()=>{
        //do api call here
        setOpen(false);
    }

    return (
        <>
            <Navbar />
            {profile && <div className="cntainer">
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
                        <Button variant="outlined" className="button" onClick={onEdit}>Edit</Button>
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
                        <p className='left'>************</p><span style={{color: "#03a9fc", cursor:"pointer", marginLeft:"100px"}} onClick={handleOpen}>Change password</span>
                    </div>
                </div>
                <div className="bottm-section">
                    <p className='grey-text'>Created by <a href="#" className="username">username</a></p>
                    <p className='grey-text'>devChallenges.io</p>
                </div>
            </div>}
            {edit && (<Edit onClickBack={onClickBack}/>)}
            {open && (<ModalComp open={open} onClose={handleClose} onChangePassword={onChangePassword}/>)}
        </>
        
    )

    
}

export default Profile;