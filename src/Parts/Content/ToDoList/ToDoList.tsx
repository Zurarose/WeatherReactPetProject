import Box from "@mui/material/Box";
import DayTimer from "../../Utils/Timer/DayTimer";
import CurrentTasks from "./CurrentTasks";
import CompletedTasks from "./CompletedTasks";

const ToDoList = (props) => {
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