import React from 'react';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';

const Questions = ({ qs, indx, handleAns }) => {
    return (
        <div className=' mx-20 mt-10 p-10 border-2 border-gray-600 border-solid rounded-lg '>
            <div className='flex justify-between '>
                <h2 className='text-xl font-semibold'>Quiz {indx + 1}: {qs.question.slice(3, -4)}</h2>
                <EyeIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div className='gap-y-1.5'>
                {
                    qs.options.map(option => <Option option={option} handleAns={handleAns} correctAnswer={qs.correctAnswer}></Option>)
                }
            </div>

        </div>
    );

};

export default Questions;