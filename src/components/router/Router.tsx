import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../contentPage/home/HomePage";
import ItemsPage from "../contentPage/items/ItemsPage";

function Home() {
    return null;
}

const Router = () => {
    return (
        <Routes>
            <Route path={'/home'} element={<HomePage/>}/>
            <Route path={'/:categoryId'} element={<ItemsPage/>}/>
        </Routes>
    );
};

export default Router;