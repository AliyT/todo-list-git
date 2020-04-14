import React from 'react'
import s from './AppPage.module.sass'
import MyTodos from "./Todos/MyTodos";
import AddTodo from "./Todos/AddTodo/AddTodo";

const AppPage = () => {
    return (
        <>
            <div className={s.contentWrapper}>
                <div className={s.todoList}>
                    <h1>Список дел</h1>
                    <AddTodo/>
                    <MyTodos/>
                </div>
            </div>
        </>
    );
};

export default AppPage;