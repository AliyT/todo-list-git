import React from 'react';
import './App.sass';
import AppPage from "./components/AppPage/AppPage";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <div className="pageWrapperContent">
                    <Route path='/app' render={() => <AppPage /> } />

                    <Route path='/users' render={() => <UsersContainer />}/>

                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
