import {connect} from "react-redux";
import ToDoList from "./ToDoList";
import {getTaskList} from "../../../Selectors/ToDoListSelector";
const ToDoListContainer = (props) =>{

    return <ToDoList {...props}/>
}

function mapStateToProps(state){
    return {
        TaskList: getTaskList(state)
    }
}
export default connect(mapStateToProps, {})(ToDoListContainer)