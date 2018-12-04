import React, { Component } from 'react';
import ToDo from './ToDoComponent';

class ToDosComponent extends Component {
    render() {
        let { todos, onDeleteClick, onToggleClick } = this.props;
        const todosList = todos.map(todo => {
            return (
                <ToDo key={todo.id} todo={todo} onClick={ onToggleClick } deleteClick={ onDeleteClick }/>
            )
        })
        return (
            <ul>
                { todosList }
            </ul>
        );
    }
  }
  
  export default ToDosComponent;
