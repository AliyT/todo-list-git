import React from 'react'
import s from './AppPage.module.sass'
import MyTodos from "./Todos/MyTodos";
import AddTodo from "./Todos/AddTodo/AddTodo";

const AppPage = (props) => {

    return (
        <>
            <div className={s.contentWrapper}>
                <div className={s.todoList}>
                    <h1>Список дел</h1>
                    <AddTodo newTodoText={props.appPage.newTodoText}
                             dispatch={props.dispatch}
                            //addTodoItem={props.addTodoItem}
                            // updateNewTodoText={props.updateNewTodoText}
                    />
                    <MyTodos appPage={props.appPage}/>
                </div>
            </div>
        </>
    );
};

export default AppPage;