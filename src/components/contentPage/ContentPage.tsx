import React from 'react';
import './ContentPage.scss';
import Products from "../products/Products";
import Router from "../router/Router";

const ContentPage = () => {
    return (
        <div className={'contentPage'}>
            <Router/>
        </div>
    );
};

export default ContentPage;