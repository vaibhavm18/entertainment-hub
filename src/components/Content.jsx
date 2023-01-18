import React, { useEffect, useState } from "react";
import { API_KEY, styles, url } from "../constant";
import Loader from "./Loader";
import Logo from "./Logo";
import Shows from "./Shows";
import SearchBar from "./SearchBar";
import filterData from "./hooks/filterData";
import useFetchData from "./hooks/useFetchData";

const Content = ({ status, apiResult, type }) => {
  const reqUrl = `${url}${type}?api_key=${API_KEY} `;
  const [searchInput, setSearchInput] = useState("");
  const shows = useFetchData(reqUrl, setSearchInput);
  const handelSubmit = (data) => {
    setSearchInput(data);
  };
  const filteredShows = filterData(shows, searchInput);
  return (
    <div className={`${styles.container} `}>
      <div className='flex flex-col items-center  gap-8 py-6 '>
        <Logo />
        <h2 className='font-bold text-4xl'>{status}</h2>
        <div className='flex flex-col items-center gap-1 '>
          <SearchBar handelSubmit={handelSubmit} />
          {searchInput && (
            <h4 className='font-mono text-4xl font-bold'>
              Search results of {searchInput}
            </h4>
          )}
        </div>
        <Shows shows={filteredShows} load={<Loader />} />
      </div>
    </div>
  );
};

export default Content;
