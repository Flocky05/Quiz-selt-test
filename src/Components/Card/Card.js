import React from "react";
import { ArrowRightIcon, BeakerIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Card = ({ quiz }) => {
  const { name, id, logo, total } = quiz;
  return (
    <div>
      <div className="card w-full bg-base-200 hover:bg-gray-700 shadow-xl">
        <figure className="px-4 pt-4">
          <img src={logo} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="card-body flex justify-between">
          <div className="flex">
            <h2 className="card-title text-white">{name}</h2>
            <p className="text-white">Total quizs:{total}</p>
          </div>
          <div>
            <Link
              to={`/Topic/${id}`}
              className="bg-pink-400 hover:bg-pink-600 flex px-3 py-2 rounded-md"
            >
              <p className="text-white">Start quizs</p>
              <ArrowRightIcon className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
