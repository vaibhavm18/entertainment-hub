import React from "react";
import { Link } from "react-router-dom";

const Links = ({ path, icon, tooltip }) => {
  return (
    <li className={`text-3xl  rounded-xl w-full center py-2 relative`}>
      <Link
        className=' transition-colors duration-200 p-4 bg-slate-600 rounded-full text-green-400 hover:text-white hover:bg-green-400 hover:rounded-2xl active:scale-105 peer'
        to={path}
      >
        {icon}
      </Link>
      <span className='text-base  absolute -bottom-6 scale-0 text-start transition-all duration-300  peer-hover:scale-100 '>
        {tooltip}
      </span>
    </li>
  );
};

export default Links;
