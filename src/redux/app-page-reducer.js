const ADD_TODO_ITEM = 'ADD-TODO-ITEM'
const UPDATE_NEW_TODO_TEXT = 'UPDATE-NEW-TODO-TEXT'

const appPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            let newTodo = ({
                id: 4,
                todo: state.newTodoText,
            });
            state.todos.push(newTodo);
            state.newTodoText = '';
            return state;
        case UPDATE_NEW_TODO_TEXT:
            state.newTodoText = action.newTodoText;
            return state;
        default:
            return state;

    }
}

// ActionCreators
export const addTodoItemActionCreator = () => ({type: ADD_TODO_ITEM})
export const updateNewTodoTextActionCreator = (text) =>
    ({type: UPDATE_NEW_TODO_TEXT, newTodoText: text})

export default appPageReducer;