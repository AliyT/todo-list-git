import React from 'react';
import './App.sass';
import Header from "./components/Header/Header";
import AppPage from "./components/AppPage/AppPage";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="pageWrapperContent">
                <AppPage />
                {/*<About />*/}
            </div>
            <Footer />
        </div>
    );
}

export default App;
