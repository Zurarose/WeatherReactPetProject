import {connect} from "react-redux";
import ToDoList from "./ToDoList";
import {getTaskCompleted, getTaskCount, getTaskList} from "../../../Selectors/ToDoListSelector";
import {CompleteTaskAC, CreateTaskAC} from "../../../Redux/ToDoListReducer";
import {AppStateType} from "../../../Redux/reduxStore";
import {CompletedTaskType, TaskType} from "../../../Types/Weather/ToDoListTypes";
import React from "react";

interface MapStateToPropsType {
    TaskList: ReadonlyArray<TaskType>
    TaskCount: number
    TaskCompleted: ReadonlyArray<CompletedTaskType>
}

interface MapDispatchToPropsType {
    CreateTask: (data: TaskType) => void
    CompleteTask: (data: Array<number>) => void
}

interface OwnPropsType {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const ToDoListContainer: React.FC<PropsType> = (props) => {
    return <ToDoList {...props}/>
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        TaskList: getTaskList(state),
        TaskCount: getTaskCount(state),
        TaskCompleted: getTaskCompleted(state)
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {CreateTask: CreateTaskAC, CompleteTask: CompleteTaskAC})(ToDoListContainer)