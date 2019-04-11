import React, { Component } from 'react';
import './index.css';
import { TodoAction } from '../../store/action/todo-action';

import { connect } from 'react-redux';

class ToasterComponent extends Component {
    constructor() {
        super();
        // this.state = {
        //     toasterFlag: false
        // }
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            this.props.sendToaster('');
        }, 2000);
    }
    render() {
        return (
            this.props.toasterMsg ?
                <div className="toaster_container">
                    <div className="toaster bounceIn animated">
                        {this.props.toasterMsg}
                    </div>
                </div>
                : null
        )
    }
}
const mapStateToProps = state => {
    console.warn('state', state.todoReducer.todos)
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
