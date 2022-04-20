import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import DayTimer from "./DayTimer";
import Typography from "@mui/material/Typography";
import CurrentTasks from "./CurrentTasks";
import CompletedTasks from "./CompletedTasks";

const ToDoList = (props) => {
    return (<>
        <DayTimer/>
        <Box sx={{display: "flex", flexDirection: "row"}}>
            <Box sx={{width: "50%"}}>
                <CurrentTasks {...props}/>
            </Box>
            <Box sx={{width: "50%"}}>
                <CompletedTasks {...props}/>
            </Box>
        </Box>
    </>);

}
export default ToDoList