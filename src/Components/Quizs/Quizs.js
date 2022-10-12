import React from 'react';
import Card from '../Card/Card';

const Quizs = ({ quizs }) => {
    console.log((quizs))

    return (
        <div className='grid grid-cols-4 gap-10 p-20'>
            {
                quizs.map(quiz => <Card
                    quiz={quiz}
                    key={quizs.id}></Card>)
            }
        </div>
    );
};

export default Quizs;