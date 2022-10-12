import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Datum from '../Datum/Datum';

const Statistics = () => {
    const data = useLoaderData().data;
    // console.log(data);
    return (
        <div>
            <h3 className='text-3xl m-4 p-4'>Statistics about questions</h3>
            <div className='flex justify-center items-center min-h-screen'>

                <LineChart width={500} height={300} data={data}>
                    <Line dataKey='total' stroke="#8884d8" activeDot={{ r: 8 }}></Line>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;