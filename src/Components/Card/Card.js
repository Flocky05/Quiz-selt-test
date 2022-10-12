import React from 'react';
import { ArrowRightIcon, BeakerIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Card = ({ quiz }) => {
    const { name, id, logo, total } = quiz;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body flex justify-between">
                    <div className='flex'>
                        <h2 className="card-title">{name}</h2>
                        <p>Total quizs:{total}</p>
                    </div>
                    <div>
                        <Link to={`/Topic/${id}`} className="btn bg-blue-600 flex">
                            <p>Start quizs</p>
                            <ArrowRightIcon className="h-6 w-6 text-white" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;