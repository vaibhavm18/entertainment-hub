import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { show } from "../bookmark/bookmark";
import { isBookmarked } from "../constant";
import Show from "./Show";

type Props = {
  shows: show[];
  load: ReactNode;
  isSelected: boolean;
};
const Shows = ({ shows, load, isSelected }: Props) => {
  const fav = useSelector((state: RootState) => state.bookmark.favorites);
  return (
    <div className="grid grid-cols-card gap-5  ">
      {shows && shows.length > 0
        ? shows.map(
            ({
              title,
              name,
              first_air_date,
              vote_average,
              poster_path,
              id,
              release_date,
            }) => {
              return (
                <Show
                  title={title ? title : name}
                  vote_average={vote_average}
                  poster_path={poster_path}
                  id={id}
                  key={id}
                  release_date={release_date ? release_date : first_air_date}
                  isSelected={isBookmarked(id, fav, isSelected)}
                  first_air_date=""
                  name=""
                />
              );
            }
          )
        : load}
    </div>
  );
};

export default Shows;
