import Box from "@mui/material/Box";
import DayTimer from "../../Utils/Timer/DayTimer";
import CurrentTasks from "./CurrentTasks";
import CompletedTasks from "./CompletedTasks";
import React from "react";
import {CompletedTaskType, TaskType} from "../../../Types/Weather/ToDoListTypes";

interface PropsType {
    TaskList: ReadonlyArray<TaskType>
    TaskCount: number
    TaskCompleted: ReadonlyArray<CompletedTaskType>

    CreateTask: (data: TaskType) => void
    CompleteTask: (data: Array<number>) => void
}

const ToDoList = (props: PropsType) => {
    return (<>
        <DayTimer/>
        <Box sx={{display: "flex", flexDirection: "row", mt: 1}}>
            <Box sx={{width: "55%"}}>
                <CurrentTasks {...props}/>
            </Box>
            <Box sx={{width: "45%", borderLeft: 1, borderColor: "grey.500"}}>
                <CompletedTasks {...props}/>
            </Box>
        </Box>
    </>);

}
export default ToDoList