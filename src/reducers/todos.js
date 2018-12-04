import { 
    ADD_TODO, 
    DELETE_TODO,
    TOGGLE_TODO } from '../contants/ActionTypes'

//可以单独起来进行公共引用
// const initialState = {
//     todos: [],
//     visibilityFilter: 'SHOW_ALL'
// }

const todos = (state = [], action)=> {
    switch(action.type) {
        case ADD_TODO:
            return [
                    ...state,
                    {
                        id: action.id,
                        text: action.text,
                        isComplete: false
                    }
            ];
        case DELETE_TODO:
            return state.filter(t => t.id !== action.id);
        case TOGGLE_TODO:
            return state.map(t => {
                if(t.id === action.id) {
                    t.isComplete = !t.isComplete;
                }
                return t;
            })
        default:
            return state;
    }
}

export default todos;