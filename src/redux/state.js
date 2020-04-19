// Создаем функцию которая приходит нам в парам как observer из index.js
let rerenderEntireTree = () => {
    // теперь здесь observer)))
    console.log("State changed");
}

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

export const addTodoItem = () => {
    let newTodo = ({
        id: 4,
        todo: state.appPage.newTodoText,
    });
    state.appPage.todos.push(newTodo);
    state.appPage.newTodoText = '';
    rerenderEntireTree(state);
}

export const updateNewTodoText = (newTodoText) => {
    state.appPage.newTodoText = newTodoText;
    rerenderEntireTree(state);
}


/*rerenderEntireTree = observer - без let иначе переменная
будет жить внутри функции - функция отработала-переменная умерла, а так
функция выпрыгнет найдет rerenderEntireTree и присвоит observer)))
*/
export const subscriber = (observer) => {
    rerenderEntireTree = observer; // наблюдатель
}

export default state