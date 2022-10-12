import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Fontpage = () => {
    const quizs = useLoaderData();
    return (
        <div>
            <Quizs quizs={quizs.data}></Quizs>
        </div>
    );
};

export default Fontpage;