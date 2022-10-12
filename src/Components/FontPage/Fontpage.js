import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Hero } from '../Header/hero';
import Quizs from '../Quizs/Quizs';

const Fontpage = () => {
    const quizs = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Quizs quizs={quizs.data}></Quizs>
        </div>
    );
};

export default Fontpage;