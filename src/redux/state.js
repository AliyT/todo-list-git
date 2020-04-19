import {rerenderEntireTree} from "../render";

let state = {
    appPage: {
        todos: [
            {id: 1, todo: "Купить хлеб"},
            {id: 2, todo: "Купить молоко"},
            {id: 3, todo: "Завтра встать в 5:00"},
        ],
        newTodoText: 'test text',
    },
}

window.state = state;

export let addTodoItem = () => {
    let newTodo = ({
        id: 4,
        todo: state.appPage.newTodoText,
    });
    state.appPage.todos.push(newTodo);
    state.appPage.newTodoText = '';
    rerenderEntireTree(state);
}

export let updateNewTodoText = (newTodoText) => {
    state.appPage.newTodoText = newTodoText;
    rerenderEntireTree(state);
}


export default state