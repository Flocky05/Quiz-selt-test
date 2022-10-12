import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Topic = () => {
    const topic = useLoaderData().data;
    return (
        <div className='drop-shadow-xl'>
            <h2 className='text-2xl text-blue-600 font-bold  m-6'>Quiz of {topic.name}</h2>
            {
                topic.questions.map(qs => <Questions
                    key={qs.id}
                    qs={qs}
                ></Questions>)
            }

        </div>
    );
};

export default Topic;