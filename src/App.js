import React, {Component} from 'react';
import './App.sass';
import AppPage from "./components/AppPage/AppPage";
import Footer from "./components/Footer/Footer";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/mainApp-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
                <div className="wrapper">
                    <HeaderContainer/>
                    <div className="pageWrapperContent">
                        <Route path='/app' render={() => <AppPage/>}/>

                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                        <Route path='/login' render={() => <LoginPage/>}/>
                    </div>
                    <Footer/>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.mainApp.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
