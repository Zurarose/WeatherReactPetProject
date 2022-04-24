import {AppStateType} from "../Redux/reduxStore";

export function getTaskList(state: AppStateType){
    return state.ToDoListPage.tasks
}
export function getTaskCount(state: AppStateType){
    return state.ToDoListPage.taskCount
}
export function getTaskCompleted(state: AppStateType){
    return state.ToDoListPage.completed
}