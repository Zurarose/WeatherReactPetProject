import {connect} from "react-redux";
import ToDoList from "./ToDoList";
import {getTaskCompleted, getTaskCount, getTaskList} from "../../../Selectors/ToDoListSelector";
import {CompleteTaskAC, CreateTaskAC} from "../../../Redux/ToDoListReducer";

const ToDoListContainer = (props) => {
    return <ToDoList {...props}/>
}

function mapStateToProps(state) {
    return {
        TaskList: getTaskList(state),
        TaskCount: getTaskCount(state),
        TaskCompleted: getTaskCompleted(state)
    }
}

export default connect(mapStateToProps, {CreateTask: CreateTaskAC, CompleteTask: CompleteTaskAC})(ToDoListContainer)