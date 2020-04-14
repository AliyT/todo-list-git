import React from 'react'
import s from './MyTodos.module.sass'
import Todo from "./Todo/Todo";

const MyTodos = () => {
    return (
        <>
            <p className={s.p}>Выполни дела сегодня!</p>
            <hr/>
            <div className={s.myTodos}>
                <Todo todo="Купить хлеб"/>
                <Todo todo="Купить молоко"/>
            </div>
        </>
    );
};

export default MyTodos;