import React, { Component } from 'react';
import './index.css';
import { TodoAction } from '../../store/action/todo-action';

import { connect } from 'react-redux';

class ToasterComponent extends Component {
    constructor(props) {
        super(props);
        this.timer = null
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.toasterMsg) {

            this.timer = setTimeout(() => {
                this.props.sendToaster('');
            }, 1500);
        }
        else {
            clearTimeout(this.timer)
        }
    }
    render() {
        return (
            this.props.toasterMsg ?
                <div className="toaster_container">
                    <div className="toaster slideInUp animated">
                        {this.props.toasterMsg}
                    </div>
                </div>
                : null
        )
    }
}
const mapStateToProps = state => {
    // console.warn('state', state.todoReducer.todos)
    return {
        toasterMsg: state.todoReducer.toasterMsg,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendToaster: (msg) => dispatch(TodoAction.sendToaster(msg))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToasterComponent);
