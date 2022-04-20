import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";

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
        checked.length ? setCompleteActive(false): setCompleteActive(true)
    }, [checked.length])
    return (<>
        <Typography variant="h6">
            Current tasks
        </Typography>
        <Button sx={{width: "50%", borderRadius: 0}} variant="outlined">Create tasks</Button>
        <Button sx={{width: "50%", borderRadius: 0, borderLeft: 0}} disabled={completeActive} variant="outlined">Complete task</Button>
        <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {props.TaskList.map((item, index) => {
                const labelId = `checkbox-list-label-${item.id}`;
                return (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={handleToggle(item.id)} dense>
                            <ListItemText sx={{maxWidth: 20, mr: 1, color: 'black'}}
                                          primary={index + 1}
                            />
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(item.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                secondary={
                                    <>
                                        {item.description}
                                    </>}
                            />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    </>)
}
export default CurrentTasks