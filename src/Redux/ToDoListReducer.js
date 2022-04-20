//Редьюсор, который создает action и общается с диспатчем
import {PlacesAPI, WeatherAPI} from "../API/api";

const consta = "consta"

let initialState = {
    data: [
        {
            id: "1",
            title: "First",
            description: "To do this"
        },
        {
            id: "2",
            title: "Second",
            description: "To do this 2"
        }
    ]
}

//Выбор действия в зависимости от type action
function ToDoListReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state

    }
}

export function getCities(param) {
    return {
        type: consta,
        data: param
    }
}

export default ToDoListReducer