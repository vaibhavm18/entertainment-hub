import { show } from "../bookmark/bookmark";

const filterData = (shows: show[], searchInput: string) => {
  const newShows = shows.filter((show) => {
    const title = show.title ? show.title : show.name;
    const lowerCaseTitle = title.toLowerCase();
    return lowerCaseTitle.search(searchInput) !== -1;
  });

  return newShows;
};

export default filterData;
