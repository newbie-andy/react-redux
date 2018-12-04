import { ADD_TODO } from '../contants/ActionTypes';
let toDoId = 0;

export const Add_ToDo = (text) => {
    return {
        type: ADD_TODO,
        id: toDoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
  

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}