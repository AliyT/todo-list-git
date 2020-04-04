import React from 'react'
import s from './Todo.module.sass'

const Todo = () => {
    return (
        <>
            <div className={s.todoItem}>
                <span>
                    <input className={s.checkbox} type="checkbox"/>
                </span>
                <input type="text" className={s.input}/>
                <button>Удалить</button>
                <button>Изменить</button>
            </div>

        </>
    );
};

export default Todo;