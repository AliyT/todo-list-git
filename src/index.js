import * as serviceWorker from "./serviceWorker";
import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import {addTodoItem, subscriber, updateNewTodoText} from "./redux/state";
import state from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addTodoItem={addTodoItem}
                 updateNewTodoText={updateNewTodoText}/>
        </React.StrictMode>, document.getElementById('root'));
};


rerenderEntireTree(state);

subscriber(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
