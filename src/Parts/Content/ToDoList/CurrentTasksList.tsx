import React from 'react';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import {TaskType} from "../../../Types/Weather/ToDoListTypes";

interface CurrentTasksListType {
    item: TaskType
    handleToggle: (value: never) => void
    index: number
    checked: Array<number>
}

const CurrentTasksList = React.memo(({item, handleToggle, index, checked} : CurrentTasksListType) => {
    const labelId = `checkbox-list-label-${item.id}`
    return (
        <ListItem key={item.id} disablePadding>
            {/* @ts-ignore */}
            <ListItemButton onClick={() => handleToggle(item.id)} dense>
                <ListItemText sx={{minWidth: 20, maxWidth: 20, mr: 1, color: 'black'}}
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
})

export default CurrentTasksList;