import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const textfieldStyle={
    marginBottom: "10px"
}

export default function ModalComp(props) {
  

    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <TextField id="outlined-basic" label="New password" variant="outlined" style={textfieldStyle}/>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Confirm password" variant="outlined" style={textfieldStyle}/>
                    </div>
                    <Button variant="contained" color="primary" style={{ textTransform: "none" }} onClick={props.onChangePassword}>Change</Button>
                </Box>
            </Modal>
        </div>
    );
}
