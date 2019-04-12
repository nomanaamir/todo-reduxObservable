import { combineReducers, createStore,applyMiddleware } from 'redux';
import { createEpicMiddleware, } from 'redux-observable';
// reducers
import { todoReducer } from './reducer/todo-reducer'; // ye hamey value mai dena hota hai reducerName: TodoReducer
//epic
// import AddTodo from './epic/add-todo-epic'

// const RootEpic = combineEpics(
//     AddTodo.AddTodo
// )

// Application Reducers
const rootReducer = combineReducers({
    todoReducer: todoReducer,
});
const epicMiddleware = createEpicMiddleware();
export let store = createStore(rootReducer, applyMiddleware(epicMiddleware))
// epicMiddleware.run(RootEpic);