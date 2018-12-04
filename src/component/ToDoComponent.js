import React, { Component } from 'react';
let style = {
    inlineThro: {
        textDecoration: 'line-through'
    }
}

class ToDoComponent extends Component {

    render() {
        console.log(this.props);
        const { todo, deleteClick, onClick } = this.props;
        return (
            <li onClick={ ()=> { onClick(todo.id) } } style={ todo.isComplete ? style.inlineThro : {} }>
                <span>{todo.id}-{todo.text}-{todo.isComplete}</span>
                <button onClick={()=> { deleteClick(todo.id) }}>x</button>
            </li>
        )
    }
}



export default ToDoComponent;