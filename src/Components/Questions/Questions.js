import React from 'react';
import Option from '../Option/Option';

const Questions = ({ qs }) => {
    console.log(qs);
    return (
        <div>
            <h2>{qs.question.slice(3, -4)}</h2>
            <div>
                {
                    qs.options.map(option => <Option option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default Questions;