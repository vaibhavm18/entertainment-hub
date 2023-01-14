import React, { useState } from "react";
import { styles } from "../constant";
import Logo from "./Logo";
import Shows from "./Shows";

const WatchLater = ({ status }) => {
  const [watchLater, setWatchLater] = useState([]);
  return (
    <div className={`${styles.container} `}>
      <div className='flex flex-col items-center  gap-16 py-8 '>
        <Logo />
        <h2 className='font-bold text-4xl'>{status}</h2>
        <Shows apiResult={watchLater} />
      </div>
    </div>
  );
};

export default WatchLater;
