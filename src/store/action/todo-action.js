// agr default lagaye gy export k baad to import krte wqt kisi bhi naam se krlo bagair curly bracket lagaye

export class TodoAction {

    static ADD_TODO = 'ADD_TODO';

    static addTodo(payload) {
        console.log('added=-=-=-', payload)
        return {
            type: TodoAction.ADD_TODO,
            payload
        }
    }

}
