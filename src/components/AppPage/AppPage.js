import React from 'react'
import s from './AppPage.module.sass'

const AppPage = () => {
    return (
        <>
            <div className={s.contentWrapper}>

                <div className={s.todoList}>
                    <h1>Список дел</h1>
                    <div className={s.todosWrapper}>
                        <div className={s.add}>
                            <input type="text"/>
                            <button>Добавить</button>
                        </div>
                        <div className={s.todoItem}>
                            <input type="text"/>
                            <button>Удалить</button>
                            <button>Изменить</button>
                        </div>
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