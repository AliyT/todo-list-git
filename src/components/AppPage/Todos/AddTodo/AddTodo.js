import React from 'react'
import s from './AddTodo.module.sass'

const AddTodo = (props) => {

    let newTodoElement = React.createRef();

    let addTodoItem = () => {
        props.addTodoItem();
    }

    let onTodoChange = () => {
        let text = newTodoElement.current.value
        props.updateNewTodoText(text)
    }

    return (
        <>
            <div className={s.add}>
                <input
                    type="text" placeholder="Введите название дела"
                    ref={newTodoElement}
                    value={props.newTodoText}
                    onChange={onTodoChange}
                />
                <button onClick={addTodoItem}>Добавить</button>
            </div>
        </>
    );
};

export default AddTodo;