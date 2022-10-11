import React from 'react';
import './Main.css';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    const quizs = useLoaderData();
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <h2> quiz number:{quizs.data.length}</h2>

        </div>
    );
};

export default Main;