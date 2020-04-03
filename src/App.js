import React from 'react';
import './App.sass';
import Header from "./components/Header/Header";
import AppPage from "./components/AppPage/AppPage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <AppPage />
            <Footer />
        </div>
    );
}

export default App;
