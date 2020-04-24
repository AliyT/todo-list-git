import React from 'react'
import {addTodoItemActionCreator, updateNewTodoTextActionCreator} from "../../../../redux/app-reducer";
import AddTodo from "./AddTodo";
import StoreContext from "../../../../StoreContex";


const AddTodoContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onAddTodoItem = () => {
                    store.dispatch(addTodoItemActionCreator());
                }

                let onTodoChange = (text) => {
                    let action = updateNewTodoTextActionCreator(text);
                    store.dispatch(action);
                }

                return <AddTodo updateNewTodoText={onTodoChange}
                                addTodoItem={onAddTodoItem}
                                newTodoText={state.appPage.newTodoText}
                />
                }
            }
        </StoreContext.Consumer>
    );
};

export default AddTodoContainer;