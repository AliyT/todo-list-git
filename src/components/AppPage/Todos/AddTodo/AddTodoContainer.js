import React from 'react'
import { addTodoItemActionCreator, updateNewTodoTextActionCreator } from "../../../../redux/app-reducer";
import AddTodo from "./AddTodo";


const AddTodoContainer = (props) => {
    let state = props.store.getState();

    let onAddTodoItem = () => {
        props.store.dispatch(addTodoItemActionCreator());
    }

    let onTodoChange = (text) => {
        let action = updateNewTodoTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <>
            <AddTodo updateNewTodoText={onTodoChange}
                     addTodoItem={onAddTodoItem}
                     newTodoText={state.appPage.newTodoText}
            />
        </>
    );
};

export default AddTodoContainer;