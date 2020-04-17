import React from 'react'
import s from './MyTodos.module.sass'
import Todo from "./Todo/Todo";

const MyTodos = (props) => {

    let todoElement = props.todosApp.todos
        .map(t =>  <Todo todo={t.todo}/>)

    return (
        <>
            <p className={s.p}>Выполни дела сегодня!</p>
            <hr/>
            <div className={s.myTodos}>
                {todoElement}
            </div>
        </>
    );
};

export default MyTodos;