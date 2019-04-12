import { TodoAction } from '../action/todo-action';
const initial_state = {
    todos: [],
    toasterMsg: '',
}

export function todoReducer(state = initial_state, action) {
    switch (action.type) {
        case TodoAction.ADD_TODO:
            return ({
                ...state, todos: [...state.todos, action.payload]
            })
        case TodoAction.DELETE_TODO:
            var deleteState = [...state.todos];
            deleteState.splice(action.index, 1)
            return ({
                ...state, todos: deleteState
            })
        case TodoAction.EDIT_TODO:
            var editState = [...state.todos]
            editState.splice(action.index, 1)

            editState.splice(action.index, 0, action.value)

            return ({
                ...state, todos: editState
            })
            case TodoAction.TOASTER_MSG:
            return({
                ...state, toasterMsg: action.msg
            })
        default:
            return state;
    }
}