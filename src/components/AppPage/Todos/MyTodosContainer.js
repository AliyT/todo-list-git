import MyTodos from "./MyTodos";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        appPage: state.appPage
    }
}

const mapDispatchToProps = () => {
    return { }
}

const MyTodosContainer = connect(mapStateToProps, mapDispatchToProps)(MyTodos);

export default MyTodosContainer;