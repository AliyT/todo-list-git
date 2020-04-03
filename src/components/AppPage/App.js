import React from 'react';
import './App.sass';

const App = () => {
    return (
        <>
            <div className="contentWrapper">

                <div className="todoList">
                    <h1>Список дел</h1>
                    <div className="todosWrapper">
                        <div className="add">
                            <input type="text"/>
                            <button>Добавить</button>
                        </div>
                        <div className="todo-item">
                            <input type="text"/>
                            <button>Удалить</button>
                            <button>Изменить</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mainImg">
                <img
                    src="https://www.maistecnologia.com/wp-content/uploads/2014/09/10540977_1490059594582195_1269350403_n.png"
                    alt="" />
            </div>
        </>
    );
};

export default App;