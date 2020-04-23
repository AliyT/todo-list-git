import React from 'react'
import s from './AppPage.module.sass'
import AddTodoContainer from "./Todos/AddTodo/AddTodoContainer";
import MyTodosContainer from "./Todos/MyTodosContainer";

const AppPage = (props) => {
    return (
        <>
            <div className={s.contentWrapper}>
                <div className={s.todoList}>
                    <h1>Список дел</h1>
                    <AddTodoContainer store={props.store}/>
                    <MyTodosContainer store={props.store}/>
                </div>
            </div>
        </>
    );
};

export default AppPage;