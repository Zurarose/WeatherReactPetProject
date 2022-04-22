export function getTaskList(state){
    return state.ToDoListPage.data
}
export function getTaskCount(state){
    return state.ToDoListPage.taskCount
}
export function getTaskCompleted(state){
    return state.ToDoListPage.completed
}