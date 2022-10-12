import React from 'react';
import Option from '../Option/Option';

const Questions = ({ qs }) => {
    return (
        <div className=' mx-20 mt-10 p-10 border-2 border-gray-600 border-solid rounded-lg '>
            <h2 className='text-xl font-semibold'>{qs.question.slice(3, -4)}</h2>
            <div className='gap-y-1.5'>
                {
                    qs.options.map(option => <Option option={option}></Option>)
                }
            </div>

        </div>
    );

};

export default Questions;