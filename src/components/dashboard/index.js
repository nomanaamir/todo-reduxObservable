import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { TodoAction } from '../../store/action/todo-action';
class DashboardComponent extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }
    todoBind(ev) {
        this.setState({ todo: ev.target.value });
    }
    addTodo() {
        this.props.addTodo(this.state.todo)
        this.setState({ todo: '' })
    }
    render() {
        return (
            <div className='dashboard_container'>
                    <form onSubmit={(e) => e.preventDefault()}>
                <div className='input_container'>
                        <input type="text" onChange={this.todoBind.bind(this)} value={this.state.todo} autofocus="true" />
                        <button onClick={() => this.addTodo()}>Add</button>
                </div>
                    </form>

                <div className='todos_container'>
                    {
                        this.props.todoData.map((val, ind) => {
                            return (
                                <span key={ind}>{val}</span>
                            )
                        })
                    }
                </div>
            </div>



        )
    }
}
const mapStateToProps = state => {
    console.warn('state', state.todoReducer.todos)
    return {
        todoData: state.todoReducer.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(TodoAction.addTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
