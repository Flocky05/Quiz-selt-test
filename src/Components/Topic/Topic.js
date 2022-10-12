import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questions from '../Questions/Questions';

const Topic = () => {
    const topic = useLoaderData().data;
    const handleAns = (option, correctAnswer) => {
        if (option === correctAnswer) {
            toast.success("Correct");
        } else {
            toast.warning("Wrong");
        }
    }
    return (
        <div className='drop-shadow-xl'>
            <h2 className='text-2xl text-blue-600 font-bold  m-6'>Quiz of {topic.name}</h2>
            {
                topic.questions.map((qs, indx) => <Questions
                    key={qs.id}
                    qs={qs}
                    indx={indx}
                    handleAns={handleAns}
                ></Questions>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Topic;