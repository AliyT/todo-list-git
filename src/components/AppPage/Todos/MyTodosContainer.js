import React from 'react'
import MyTodos from "./MyTodos";
import StoreContext from "../../../StoreContex";

const MyTodosContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().appPage;
                return <MyTodos appPage={state}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyTodosContainer;