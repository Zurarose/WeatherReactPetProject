const CreateNewTask = "CreateNewTask"
const completeTask = "CompleteTask"



let initialState = {
    data: [],
    taskCount: 0,
    completed: []
}

//Выбор действия в зависимости от type action
function ToDoListReducer(state = initialState, action) {
    switch (action.type) {
        case CreateNewTask:
            return {
                ...state,
                data: [...state.data, action.data],
                taskCount: state.taskCount + 1
            }
        case completeTask:
            let completed = [...state.data.filter(item => action.data.includes(item.id))]
            return {
                ...state,
                data: [...state.data.filter(item => !action.data.includes(item.id))],
                completed: [...state.completed, ...completed],
            }
        default:
            return state

    }
}

export function CreateTaskAC(info) {
    return {
        type: CreateNewTask,
        data: {id: info.taskCountNew, title: info.titleValue, description: info.descValue}
    }
}

export function CompleteTaskAC(ids) {
    return {
        type: completeTask,
        data: ids
    }
}

export default ToDoListReducer