import {CompletedTaskType, TaskType} from "../Types/Weather/ToDoListTypes";

const CreateNewTask = "CreateNewTask"
const CompleteTask = "CompleteTask"


let initialState = {
    tasks: [] as ReadonlyArray<TaskType> | [],
    taskCount: 0,
    completed: [] as ReadonlyArray<CompletedTaskType> | []
}

type initialStateType = typeof initialState

function ToDoListReducer(state = initialState, action: ActionsTypes): initialStateType {
    switch (action.type) {
        case CreateNewTask:
            return {
                ...state,
                tasks: [...state.tasks, action.data],
                taskCount: state.taskCount + 1
            }
        case CompleteTask:
            let completed = [...state.tasks.filter(item => action.data.includes(item.id))]
            return {
                ...state,
                tasks: [...state.tasks.filter(item => !action.data.includes(item.id))],
                completed: [...state.completed, ...completed],
            }
        default:
            return state

    }
}

type ActionsTypes = CreateTaskACType | CompleteTaskACType

type CreateTaskACType = {
    type: typeof CreateNewTask
    data: TaskType
}

export function CreateTaskAC(data: TaskType): CreateTaskACType {
    return {
        type: CreateNewTask,
        data: data
    }
}

type CompleteTaskACType = {
    type: typeof CompleteTask
    data: Array<number>
}

export function CompleteTaskAC(data: Array<number>): CompleteTaskACType {
    return {
        type: CompleteTask,
        data: data
    }
}

export default ToDoListReducer