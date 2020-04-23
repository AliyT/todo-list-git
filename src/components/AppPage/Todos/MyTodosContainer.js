import React from 'react'
import MyTodos from "./MyTodos";

const MyTodosContainer = (props) => {
    let state = props.store.getState().appPage;

    return (
        <>
            <MyTodos appPage={state}/>
        </>
    );
};

export default MyTodosContainer;