import React from 'react';
import './Main.css';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Quizs from '../Components/Quizs/Quizs';

const Main = () => {
    const quizs = useLoaderData();
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Quizs quizs={quizs.data}></Quizs>

        </div>
    );
};

export default Main;