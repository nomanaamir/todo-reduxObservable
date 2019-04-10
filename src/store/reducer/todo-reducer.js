import { TodoAction } from '../action/todo-action';
const initial_state = {
    todos: []
}

export function todoReducer(state = initial_state, action) {
    console.warn('Reducer Listening !!!', action.payload);
    switch (action.type) {
        case TodoAction.ADD_TODO:
            return ({
                ...state, todos: [...state.todos, action.payload]
            })
        // console.warn('ADD_TODO resonse from reducer')
        default:
            return state;
    }
}