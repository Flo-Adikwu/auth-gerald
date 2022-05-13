import React from 'react';
import '../styles/edit.css';
import { Button, TextField, TextareaAutosize } from '@mui/material';




const Edit = (props) => {
    const onEdit=()=>{
        //do api call here
    }

    return (
        <>
            <div className="ctainer">
            <p className='back' onClick={props.onClickBack} style={{cursor:"pointer"}}>Back</p>
                <div className="sb-cntainer">
                    <div className='patition-div' style={{marginBottom: "20px"}}>
                        <div>
                            <span className='profile'>Change Info</span><br />
                            <span className='grey'>Changes will be reflected to every services</span>
                        </div>
                    </div>
                    <div className='textarea-div'>
                        <label>Name</label><br />
                        <TextField id="outlined-basic" label="Enter your name..." style={{width: 600}} variant="outlined" />
                    </div>
                    <div className='textarea-div'>
                        <label>Bio</label><br />
                        <TextareaAutosize
                            minRows={4}
                            aria-label="maximum height"
                            placeholder="Enter your bio..."
                            style={{width: 600}}
                        />
                    </div>
                    <div className='textarea-div'>
                        <label>Phone</label><br />
                        <TextField id="outlined-basic" label="Enter your phone number ..." style={{width: 600}} variant="outlined" />
                    </div>
                    <div className='textarea-div'>
                        <label>Email</label><br />
                        <TextField id="outlined-basic" label="Enter your email..." style={{width: 600}} variant="outlined" />
                    </div>
                    <div className='textarea-div'>
                        <label>Password</label><br />
                        <TextField id="outlined-basic" label="Enter your new password..." style={{width: 600}} variant="outlined" />
                    </div>
                    <Button variant="contained" color="primary" style={{ textTransform: "none" }} onClick={onEdit}>Save</Button>
                </div>
                <div className="bottm-section">
                    <p className='grey-text'>Created by <a href="#" className="username">username</a></p>
                    <p className='grey-text'>devChallenges.io</p>
                </div>
            </div>
        </>
    )
}

export default Edit;