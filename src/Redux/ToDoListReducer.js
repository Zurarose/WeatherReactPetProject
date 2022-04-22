const CreateNewTask = "CreateNewTask"
const CompleteTaks = "CompleteTaks"

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
        case CompleteTaks:
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

export function CreateTask(info) {
    return {
        type: CreateNewTask,
        data: {id: info.taskCountNew, title: info.titleValue, description: info.descValue}
    }
}

export function CompleteTask(ids) {
    return {
        type: CompleteTaks,
        data: ids
    }
}

export default ToDoListReducer