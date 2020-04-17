import React from 'react'
import s from './Todo.module.sass'

const Todo = (props) => {

    return (
        <div className={s.todoItem}>
            <span className={s.checkbox}>
                <input type="checkbox"/>
            </span>
            <span className={s.todo}>
                    {props.todo}
            </span>
            {/*<input type="text" className={s.input}/>*/}
            <div className={s.buttonsBlock}>
                <button>Удалить</button>
                <button>Изменить</button>
            </div>
        </div>
    );
};

export default Todo;