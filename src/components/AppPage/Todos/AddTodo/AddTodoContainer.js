import {addTodoItemActionCreator, updateNewTodoTextActionCreator} from "../../../../redux/app-reducer";
import AddTodo from "./AddTodo";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newTodoText: state.appPage.newTodoText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewTodoText: (text) => {
            let action = updateNewTodoTextActionCreator(text);
            dispatch(action);
        },
        addTodoItem: () => {
            dispatch(addTodoItemActionCreator());
        }
    }
}

const AddTodoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;