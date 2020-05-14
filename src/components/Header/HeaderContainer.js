import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUsersData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUsersData();
    }

    render() {
        return (
            // все данные(пропсы) из mapStateToProps передаем в <Header />
            <Header {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUsersData, logout})(HeaderContainer);