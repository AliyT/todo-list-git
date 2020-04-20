import React from 'react'
import s from './AddTodo.module.sass'

const AddTodo = (props) => {

    let newTodoElement = React.createRef();

    let addTodoItem = () => {
        // props.addTodoItem();
        props.dispatch({type: 'ADD-TODO-ITEM'});
    }

    let onTodoChange = () => {
        let text = newTodoElement.current.value;
        // props.updateNewTodoText(text)
        let action = {type: 'UPDATE-NEW-TODO-TEXT', newTodoText: text};
        props.dispatch(action);
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