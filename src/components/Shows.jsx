import React from "react";
import Loader from "./Loader";
import Show from "./Show";
const Shows = ({ shows, load, isSelected }) => {
  return (
    <div className='grid grid-cols-card gap-5  '>
      {shows && shows.length > 0
        ? shows.map(
            (
              {
                title,
                name,
                first_air_date,
                vote_average,
                poster_path,
                id,
                release_date,
              },
              index
            ) => {
              return (
                <Show
                  title={title ? title : name}
                  vote_average={vote_average}
                  poster_path={poster_path}
                  id={id}
                  key={id}
                  release_date={release_date ? release_date : first_air_date}
                  isSelected={isSelected}
                />
              );
            }
          )
        : load}
    </div>
  );
};

export default Shows;
