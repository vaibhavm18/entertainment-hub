import React from "react";
import { HiHome, HiFire } from "react-icons/hi";
import { MdMonitor, MdUpcoming } from "react-icons/md";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const navItems = [
  {
    icon: <HiHome />,
    path: "/",
    tooltip: "Home",
  },
  {
    icon: <HiFire />,
    path: "/trending",
    tooltip: "Trending",
  },
  {
    icon: <MdUpcoming />,
    path: "/upcoming",
    tooltip: "Upcoming",
  },
  {
    icon: <MdMonitor />,
    path: "/tvshows",
    tooltip: "TV Shows",
  },
  {
    icon: <BsFillBookmarkPlusFill />,
    path: "/watchlater",
    tooltip: "Watch Later",
  },
];

const styles = {
  container: "bg-gray-800 flex-rest rounded-2xl  overflow-y-auto scrollbar p-4",
};

const API_KEY = import.meta.env.VITE_API_KEY;
const url = "https://api.themoviedb.org/3/";
const imgUrl = "https://image.tmdb.org/t/p/original";

const pages = [
  { path: "/", status: "Now Playing", type: "movie/now_playing" },
  { path: "/upcoming", status: "UpComing", type: "movie/upcoming" },
  { path: "/trending", status: "Trending", type: "movie/top_rated" },
  { path: "/tvshows", status: "TV Shows", type: "tv/popular" },
];
const isBookmarked = (id, fav, isSelected) => {
  for (let i = 0; i < fav.length; i++) {
    const element = fav[i].id;
    if (id === element) {
      return true;
    }
  }
  return isSelected;
};
export { navItems, styles, pages, API_KEY, imgUrl, url, isBookmarked };
