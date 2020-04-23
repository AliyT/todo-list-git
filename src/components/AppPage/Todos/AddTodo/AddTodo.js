import React from 'react'
import s from './AddTodo.module.sass'



const AddTodo = (props) => {
    let onAddTodoItem = () => {
        props.addTodoItem();
    }

    let onTodoChange = (e) => {
        let text = e.target.value;
        props.updateNewTodoText(text)
    }

    return (
        <>
            <div className={s.add}>
                <input
                    type="text" placeholder="Введите название дела"
                    value={props.newTodoText}
                    onChange={onTodoChange}
                />
                <button onClick={onAddTodoItem}>Добавить</button>
            </div>
        </>
    );
};

export default AddTodo;