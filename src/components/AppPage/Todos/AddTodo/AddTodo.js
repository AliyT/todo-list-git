import React from 'react'
import s from './AddTodo.module.sass'

const AddTodo = () => {
    return (
        <>
            <div className={s.add}>
                <input type="text" placeholder="Введите название дела"/>
                <button>Добавить</button>
            </div>
        </>
    );
};

export default AddTodo;