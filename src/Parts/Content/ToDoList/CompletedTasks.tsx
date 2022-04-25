import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"
import Checkbox from "@mui/material/Checkbox"
import ListItem from "@mui/material/ListItem"
import React from "react"
import Box from "@mui/material/Box"
import {CompletedTaskType} from "../../../Types/Weather/ToDoListTypes"

interface PropsType {
    TaskCompleted: ReadonlyArray<CompletedTaskType>
}

const CompletedTasks = ({TaskCompleted}: PropsType) => {
    return (
        <Box>
            <Typography variant="h6" sx={{bgcolor: '#1976d3', color: 'white'}}>
                Completed tasks
            </Typography>
            <List sx={{width: '100%', bgcolor: 'background.paper', marginTop: '36.5px'}}>
                {TaskCompleted && TaskCompleted.map((item) => {
                    return (
                        <ListItem sx={{ml: 2}} key={item.id} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={true}
                                    disabled={true}
                                    disableRipple
                                    tabIndex={-1}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                secondary={
                                    <>
                                        {item.description}
                                    </>}
                            />
                        </ListItem>)
                })}
            </List>
        </Box>
    )

}
export default CompletedTasks