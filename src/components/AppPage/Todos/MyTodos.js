import React from 'react'
import s from './MyTodos.module.sass'
import Todo from "./Todo/Todo";

const MyTodos = () => {
    return (
        <>
            <div className={s.myTodos}>
                <Todo />
            </div>
        </>
    );
};

export default MyTodos;