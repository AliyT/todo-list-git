import React from 'react'
import s from './AppPage.module.sass'
import MyTodos from "./Todos/MyTodos";

const AppPage = () => {
    return (
        <>
            <div className={s.contentWrapper}>

                <div className={s.todoList}>
                    <h1>Список дел</h1>
                    <div className={s.todosWrapper}>

                         {/*Добавить задачу*/}
                        <div className={s.add}>
                            <input type="text" placeholder="Введите название дела"/>
                            <button>Добавить</button>
                        </div>

                        <MyTodos />

                    </div>

                </div>
            </div>
            <div className={s.mainImg}>
                <img
                    src="https://www.maistecnologia.com/wp-content/uploads/2014/09/10540977_1490059594582195_1269350403_n.png"
                    alt="" />
            </div>
        </>
    );
};

export default AppPage;