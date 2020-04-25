import React from 'react'
import s from './MyTodos.module.sass'
import Todo from "./Todo/Todo";

const MyTodos = (props) => {
    let state = props.appPage;
    let todoElement =
        state.todos.map(t => <Todo key={t.id} todo={t.todo}/>)

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