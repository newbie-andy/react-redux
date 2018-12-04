import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Add_ToDo } from '../actions'

class AddTodo extends Component {
  render() {
    let input;
    let store = this.props;
    return (
      <div>
        <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          store.dispatch(Add_ToDo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
      </div>
    );
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo;
