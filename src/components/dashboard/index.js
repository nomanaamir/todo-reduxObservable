import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { TodoAction } from '../../store/action/todo-action';
import ToasterComponent from '../toaster/index';
class DashboardComponent extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            editflag: false,
            updateIndex: null,
            completeTodos: [],
            completeFlag: false
        }
    }

    todoBind(ev) {
        this.setState({ todo: ev.target.value });
        // this.props.sendToaster('', false)

    }
    addTodo() {
        if (this.props.todoData.length === 10) {
            this.setState({ todo: '' })
            this.props.sendToaster("Diary's limit reached")

        } else {
            this.props.addTodo(this.state.todo)
            this.setState({ todo: '' })
            this.props.sendToaster('Successfully Added')
        }

    }
    deleteTodo(ind) {
        this.props.deleteTodo(ind)
        this.setState({ editflag: false, todo: '' })
        this.props.sendToaster('Successfully Deleted')

    }
    editTodo(val, ind) {
        this.setState({ editflag: true, todo: val, updateIndex: ind })
    }
    updateTodo() {
        if (this.state.todo.split(" ").join("")) {
            this.props.editTodo(this.state.todo, this.state.updateIndex)
            this.props.sendToaster('Successfully Updated')
            this.setState({ editflag: false, todo: '', updateIndex: null })

        }

    }
    completeTodo(ind) {
        var complete = [...this.state.completeTodos]
        if (this.state.completeTodos.indexOf(ind) === -1) {
            complete.push(ind)

        } else {
            complete = complete.filter((item) => item !== ind)
        }
        this.setState({ completeTodos: complete })
    }
    render() {
        // console.warn('hello', this.state.completeFlag)
        return (
            <div className='dashboard_container'>
                <div className="header">
                    <span>Todos Diary</span>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='input_container'>
                        <input type="text" onChange={this.todoBind.bind(this)} value={this.state.todo} autoFocus={true} />
                        {this.state.editflag ? <button className="update" onClick={() => this.updateTodo()}>Update</button> : this.state.todo.split(" ").join("") ? <button onClick={() => this.addTodo()}>Add</button> : <button className="disabled">Add</button>}
                    </div>
                </form>

                <div className='todos_container'>
                    {
                        this.props.todoData.length ?
                            <table>
                                <tbody>
                                    <tr>
                                        <th> TODOS <sup><span className='badge'>{this.props.todoData.length}</span></sup> </th>
                                        <th> DELETE </th>
                                        <th> EDIT </th>
                                        <th> COMPLETE </th>
                                    </tr>
                                    {
                                        this.props.todoData.map((val, ind) => {
                                            return (
                                                <tr key={ind}>
                                                    <td className={this.state.completeTodos.indexOf(ind) !== -1 ? 'complete_todo' : null} >
                                                        {val}
                                                    </td>

                                                    <td onClick={() => this.deleteTodo(ind)}>
                                                    <i class="fas fa-eraser"></i>
                                                    </td>
                                                    <td onClick={() => this.editTodo(val, ind)}>
                                                    <i class="far fa-edit"></i>
                                                    </td>
                                                    <td onClick={() => this.completeTodo(ind)}>
                                                        {this.state.completeTodos.indexOf(ind) !== -1 ? <i class="far fa-check-square grey"></i> : <i class="far fa-check-square"></i>}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            :
                            <div className="ifTodosNot">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th> TODOS <sup><span className='badge'>{this.props.todoData.length}</span></sup> </th>
                                            <th> DELETE </th>
                                            <th> EDIT </th>
                                            <th> COMPLETE </th>
                                        </tr>
                                    </tbody>
                                </table>

                                <div>
                                    <span>Your diary is empty</span>
                                </div>
                            </div>
                    }

                </div>
                <ToasterComponent></ToasterComponent>
            </div>



        )
    }
}
const mapStateToProps = state => {
    return {
        todoData: state.todoReducer.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(TodoAction.addTodo(todo)),
        deleteTodo: (ind) => dispatch(TodoAction.deleteTodo(ind)),
        editTodo: (val, ind) => dispatch(TodoAction.editTodo(val, ind)),
        sendToaster: (msg) => dispatch(TodoAction.sendToaster(msg))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
