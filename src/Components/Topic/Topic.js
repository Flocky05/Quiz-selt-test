import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Topic = () => {
    const topic = useLoaderData().data;
    return (
        <div>
            <h2>Quiz of {topic.name}</h2>
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