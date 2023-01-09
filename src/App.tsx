import React from 'react';
import './App.scss';
import HeaderApp from "./components/headerApp/HeaderApp";
import ContentPage from "./components/contentPage/ContentPage";
import FooterApp from "./components/footerApp/FooterApp";
import Router from "./components/router/Router";

function App() {
    return (
        <div className="App">
            <HeaderApp/>
            <ContentPage/>
            {/*<FooterApp/>*/}
        </div>
    );
}

export default App;
