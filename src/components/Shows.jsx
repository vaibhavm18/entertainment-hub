import React from "react";
import { apiResult } from "./constant";
import Show from "./Show";
const Shows = () => {
    return (
        <div className="flex flex-wrap  w-full justify-center gap-5 ">
            {apiResult.map(
                (
                    { title, vote_average, poster_path, id, release_date },
                    index
                ) => {
                    return (
                        <Show
                            title={title}
                            vote_average={vote_average}
                            poster_path={poster_path}
                            id={id}
                            key={id}
                            release_date={release_date}
                        />
                    );
                }
            )}
        </div>
    );
};

export default Shows;
