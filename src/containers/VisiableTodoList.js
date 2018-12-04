import { connect } from 'react-redux';
import ToDosComponent from '../component/ToDosComponent';

const getVisibleTodos = (todos, filter) => {
    console.log(filter);
    switch(filter) {
        case "SHOW_COMPLETED":
            return todos.filter(t => t.isComplete);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.isComplete);
        case "SHOW_ALL":
        default: 
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleClick: id => {
            dispatch({
                type: 'TOGGLE_TODO',
                id: id
            })
        },
        onDeleteClick:  id => {
            dispatch({
                type: 'DELETE_TODO',
                id: id
            })
        }
    }
}

const VisiableTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDosComponent)

export default VisiableTodoList;