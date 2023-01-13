import React from "react";
import { styles } from "./constant";
import Loader from "./Loader";
import Logo from "./Logo";
import Shows from "./Shows";

const Home = ({ status }) => {
  return (
    <div className={`${styles.container} `}>
      <div className="flex flex-col items-center  gap-16 py-8 ">
        <Logo />
        <h2 className="font-bold text-4xl">{status}</h2>
        <Shows />
      </div>
    </div>
  );
};

export default Home;
