import React from 'react';

const Option = ({ option, correctAnswer, handleAns }) => {
    return (
        <div>
            <button onClick={() => handleAns(option, correctAnswer)} className="btn btn-block bg-slate-200 text-blue-600 m-2">{option}</button>
        </div>
    );
};

export default Option;