import React, { useState } from 'react';
import { BeakerIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Questions = ({ qs, indx, handleAns }) => {
    const [show, setShow] = useState(false)
    const handleCorrectAns = () => {
        setShow(current => !current)
    }
    return (
        <div className=' mx-20 mt-10 p-10 border-2 border-gray-600 border-solid rounded-lg '>
            <div className='flex justify-between '>
                <h2 className='text-xl font-semibold'>Quiz {indx + 1}: {qs.question.slice(3, -4)}</h2>
                <EyeIcon onClick={handleCorrectAns} className="h-6 w-6 text-blue-500" />
            </div>
            <div className='gap-y-1.5'>
                {
                    qs.options.map(option => <Option option={option} handleAns={handleAns} correctAnswer={qs.correctAnswer}></Option>)
                }
            </div>
            {
                show && <h2 className='text-2xl font-semibold text-green-400'>{qs.correctAnswer}</h2>
            }

        </div>
    );

};

export default Questions;