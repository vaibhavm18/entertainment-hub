import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { styles } from "../constant";
import Logo from "./Logo";
import Shows from "./Shows";
import WatchLater from "./WatchLater";

const Content = ({ status, apiResult }) => {
  const [watchLater, setWatchLater] = useState([]);
  const addWatchLater = (content) => {
    setWatchLater((prev) => {
      return [...prev, content];
    });
  };
  return (
    <div className={`${styles.container} `}>
      <div className='flex flex-col items-center  gap-16 py-8 '>
        <Logo />
        <h2 className='font-bold text-4xl'>{status}</h2>
        <Shows addWatchLater={addWatchLater} apiResult={apiResult} />
      </div>
    </div>
  );
};

export default Content;
