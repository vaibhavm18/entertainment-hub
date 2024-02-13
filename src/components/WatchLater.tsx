import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { styles } from "../constant";
import Logo from "./Logo";
import NoFavorites from "./NoFavorites";
import Shows from "./Shows";

const WatchLater = () => {
  const shows = useSelector((state: RootState) => state.bookmark.favorites);
  return (
    <div className={`${styles.container} `}>
      <div className="flex flex-col items-center text-center gap-16 py-8 ">
        <Logo />
        <h2 className="font-bold text-4xl">BookMarked</h2>
        <Shows shows={shows} load={<NoFavorites />} isSelected={true} />
      </div>
    </div>
  );
};

export default WatchLater;
