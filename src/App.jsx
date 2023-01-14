import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import WatchLater from "./components/WatchLater";
import { apiResult } from "./constant";

const pages = [
  { path: "/", status: "Now Playing" },
  { path: "/upcoming", status: "UpComing" },
  { path: "/trending", status: "Trending" },
  { path: "/tvshows", status: "TV Shows" },
];

const App = () => {
  return (
    <div className='h-screen w-screen font-serif  bg-gray-900 text-white flex p-8 gap-4 '>
      <Header />
      <Routes>
        {pages.map((page, index) => {
          return (
            <Route
              key={index}
              path={page.path}
              element={<Content apiResult={apiResult} status={page.status} />}
            />
          );
        })}
        <Route element={<WatchLater />} path={"/watchlater"} />
      </Routes>
    </div>
  );
};

export default App;
