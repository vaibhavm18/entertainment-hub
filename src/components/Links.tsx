import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  icon: ReactNode;
  tooltip: string;
};

const Links = ({ path, icon, tooltip }: Props) => {
  return (
    <li
      className={`text-xl xs:text-3xl xs:py-2 rounded-xl w-full center py-1  relative`}
    >
      <NavLink
        className={({ isActive }) => {
          return `transition-colors duration-200 p-4 hover:text-white hover:bg-green-400 hover:rounded-2xl active:scale-105 peer ${
            isActive
              ? "bg-green-400 text-white rounded-2xl "
              : "bg-slate-600 rounded-full text-green-400 "
          }`;
        }}
        to={path}
      >
        {icon}
      </NavLink>
      <span className="text-base hidden xs:flex  absolute -bottom-6 scale-0 text-start transition-all duration-300  peer-hover:scale-100 ">
        {tooltip}
      </span>
    </li>
  );
};

export default Links;
