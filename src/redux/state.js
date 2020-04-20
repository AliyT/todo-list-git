let store = {
    _state: {
        appPage: {
            todos: [
                {id: 1, todo: "Купить хлеб"},
                {id: 2, todo: "Купить молоко"},
                {id: 3, todo: "Завтра встать в 5:00"},
            ],
            newTodoText: 'test text',
        },
    },
    _callSubscriber() {
        // теперь здесь observer)))
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель
        /*rerenderEntireTree(_callSubscriber-переименов) = observer - без let иначе переменная
            будет жить внутри функции - функция отработала-переменная умерла, а так
            функция выпрыгнет найдет rerenderEntireTree и присвоит observer)))
        */
    },

    //Эти методы мы вынесли в dispatch
    // addTodoItem() {
    //     let newTodo = ({
    //         id: 4,
    //         todo: this._state.appPage.newTodoText,
    //     });
    //     this._state.appPage.todos.push(newTodo);
    //     this._state.appPage.newTodoText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewTodoText(newTodoText) {
    //     this._state.appPage.newTodoText = newTodoText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        if (action.type === 'ADD-TODO-ITEM') {
            let newTodo = ({
                id: 4,
                todo: this._state.appPage.newTodoText,
            });
            this._state.appPage.todos.push(newTodo);
            this._state.appPage.newTodoText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-TODO-TEXT') {
            this._state.appPage.newTodoText = action.newTodoText;
            this._callSubscriber(this._state);
        }
    }
};

export default store;
window.store = store;