import React from 'react'
import s from './Todo.module.sass'

const Todo = (props) => {
    return (
        <>
            <div className={s.todoItem}>

                <span>
                    <input className={s.checkbox} type="checkbox"/>
                </span>
                <span className={s.todoList}>
                    {props.todo}
                </span>
                {/*<input type="text" className={s.input}/>*/}
                <button>Удалить</button>
                <button>Изменить</button>
            </div>

        </>
    );
};

export default Todo;