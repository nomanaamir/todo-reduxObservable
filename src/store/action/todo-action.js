// agr default lagaye gy export k baad to import krte wqt kisi bhi naam se krlo bagair curly bracket lagaye

export class TodoAction {

    static ADD_TODO = 'ADD_TODO';
    static DELETE_TODO = 'DELETE_TODO';
    static EDIT_TODO = 'EDIT_TODO';
    static TOASTER_MSG = 'TOASTER_MSG';


    static addTodo(payload) {
        return {
            type: TodoAction.ADD_TODO,
            msg: 'Successfully Add',
            payload
        }
    }
    static deleteTodo(ind) {
        return {
            type: TodoAction.DELETE_TODO,
            index: ind,
        }
    }
    static editTodo(val, ind) {
        return {
            type: TodoAction.EDIT_TODO,
            value: val,
            index: ind,
        }
    }
    static sendToaster(msg) {
        return {
            type: TodoAction.TOASTER_MSG,
            msg
        }
    }
}
