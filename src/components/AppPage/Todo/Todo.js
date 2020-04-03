import React from 'react'
import s from './Todo.module.sass'

const Todo = () => {
    return (
        <>
            <div className={s.todoItem}>
                <div>
                    <input className={s.checkbox} type="checkbox"/>
                </div>
                <input type="text"/>
                <button>Удалить</button>
                <button>Изменить</button>
            </div>

        </>
    );
};

export default Todo;