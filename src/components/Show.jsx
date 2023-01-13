import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { imgUrl } from "./constant";
const Show = (props) => {
  return (
    <div
      id={props.id}
      className=' flex-[1_1_250px] border cursor-pointer border-gray-700 shadow-sm shadow-white max-w-xs relative hover:scale-[1.005] hover:shadow-md transition-all duration-200 active:scale-[0.98]'
    >
      <img
        src={`${imgUrl}/${props.poster_path}`}
        alt={`${props.title}`}
        className='w-full h-auto'
      />
      <span className='absolute top-0 text-3xl -left-1 cursor-pointer text-gray-500 active:scale-105 transition-all '>
        <BsBookmarkPlusFill />
      </span>
      <div className='px-2 py-1'>
        <p>
          {props.vote_average}
          <span className='text-orange-500'> &#9733; </span>
        </p>
        <h1 className='font-normal text-lg font-Lobster'>{props.title}</h1>
        <p>{props.release_date}</p>
      </div>
    </div>
  );
};

export default Show;
