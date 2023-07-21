import React, { useEffect, useState } from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { MdBookmarkRemove } from "react-icons/md";
import { imgUrl } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { addShow, removeShow } from "../bookmark/bookmark";
const Show = (props) => {
  const [isSelected, setIsSelected] = useState(props.isSelected);
  const dispatch = useDispatch();

  return (
    <div
      id={props.id}
      className='   cursor-pointer border-gray-700 shadow-sm shadow-white  relative hover:scale-[1.005] hover:shadow-md transition-all duration-200 active:scale-[0.98]'
    >
      <img
        src={`${imgUrl}/${props.poster_path}`}
        alt={`${props.title}`}
        className='w-full h-auto'
      />
      <span className='absolute top-0 text-3xl -left-1 cursor-pointer text-gray-500 active:scale-105 transition-all '>
        {!isSelected ? (
          <BsBookmarkPlusFill
            onClick={() => {
              setIsSelected(true);
              dispatch(addShow(props));
            }}
          />
        ) : (
          <MdBookmarkRemove
            onClick={() => {
              setIsSelected(false);
              dispatch(removeShow(props.id));
            }}
          />
        )}
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
