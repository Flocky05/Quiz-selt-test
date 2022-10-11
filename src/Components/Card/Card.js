import React from 'react';

const Card = ({ quiz }) => {
    const { name, id, logo, total } = quiz;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img src={logo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body grid grid-cols-3">
                    <h2 className="card-title">{name}</h2>
                    <p>Total quizs:{total}</p>
                    <div>
                        <button className="btn bg-blue-600">Start quizs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;