import React, {useState} from 'react';
import {Backdrop, Fade, FormControl, Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid black',
    boxShadow: 24,
    p: 3,
};

const MyModal = ({open, handleClose, createTask, taskCount}) => {
    const [titleValue, setTitleValue] = useState('')
    const [descValue, setDescValue] = useState('')

    let taskCountNew = taskCount + 1

    const create = (e) => {
        e.preventDefault()
        createTask({taskCountNew, titleValue, descValue})
        setTitleValue("")
        setDescValue("")
        handleClose()
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={open}>
                <Box sx={style}>
                    <Typography sx={{textAlign: 'center'}} variant="h6">
                        Create new task
                    </Typography>
                    <form onSubmit={(e) => create(e)}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <TextField required value={titleValue} onChange={(e) => setTitleValue(e.target.value)} sx={{m: 1}}
                                       id="standard-basic" label="Title" variant="standard"/>
                            <TextField required value={descValue} onChange={(e) => setDescValue(e.target.value)} sx={{m: 1}}
                                       id="standard-basic" label="Description" variant="standard"/>
                            <Button type="submit" sx={{borderRadius: 0, m: 1}}
                                    variant="outlined">Create tasks</Button>
                        </Box>
                    </form>

                </Box>
            </Fade>
        </Modal>
    );
};

export default MyModal;