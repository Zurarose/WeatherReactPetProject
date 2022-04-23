import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import CurrentTasksList from "./CurrentTasksList";
import MyModal from "./MyModal";
import Box from "@mui/material/Box";

const CurrentTasks = (props) => {
    const [checked, setChecked] = useState([]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const [completeActive, setCompleteActive] = useState(true)
    useEffect(() => {
        checked.length ? setCompleteActive(false) : setCompleteActive(true)
    }, [checked.length])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Typography variant="h6" sx={{bgcolor: '#1976d3', color: 'white'}}>
                Current tasks
            </Typography>
            <MyModal open={open} handleClose={handleClose} createTask={props.CreateTask} taskCount={props.TaskCount}/>
            <Button sx={{width: "50%", borderRadius: 0}} onClick={handleOpen} variant="outlined">Create tasks</Button>
            <Button sx={{width: "50%", borderRadius: 0, borderLeft: 0}} onClick={() => {
                props.CompleteTask(checked)
                setChecked([])
            }}
                    disabled={completeActive} variant="outlined">Complete task</Button>
            <List sx={{width: '100%', bgcolor: 'background.paper'}}>
                {props.TaskList.map((item, index) => {
                    return (
                        <CurrentTasksList key={index} item={item} index={index}
                                          checked={checked} handleToggle={handleToggle}/>
                    );
                })}
            </List>
        </Box>
    )
}
export default CurrentTasks