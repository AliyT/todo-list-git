import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import App from './App'
import {addTodoItem, updateNewTodoText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addTodoItem={addTodoItem}
                 updateNewTodoText={updateNewTodoText}/>
        </React.StrictMode>, document.getElementById('root'));
}
