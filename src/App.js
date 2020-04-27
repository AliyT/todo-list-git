import React from 'react';
import './App.sass';
import Header from "./components/Header/Header";
import AppPage from "./components/AppPage/AppPage";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="pageWrapperContent">
                    <Route path='/app' render={() => <AppPage /> } />

                    <Route path='/users' render={() => <UsersContainer />}/>

                    <Route path='/about' render={() => <About />}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App;
