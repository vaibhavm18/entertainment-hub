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

const API_KEY = "55677c797ff4fe572605a94fb92b7c73";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const content = [
  { title: "Upcoming Movies", state: "popular", type: "movie" },
  { title: "Popular TV Shows", state: "popular", type: "tv" },
  { title: "Recently Added", state: "now_playing", type: "movie" },
  { title: "Top Rated Movies", state: "top_rated", type: "movie" },
];

const apiResult = [
  {
    adult: false,
    backdrop_path: "/evaFLqtswezLosllRZtJNMiO1UR.jpg",
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: "en",
    original_title: "Avatar: The Way of Water",
    overview:
      "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    popularity: 4701.731,
    poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    release_date: "2022-12-14",
    title: "Avatar: The Way of Water",
    video: false,
    vote_average: 7.7,
    vote_count: 3725,
  },
  {
    adult: false,
    backdrop_path: "/6mEYUYdkKoVCMeYf3rTFj0L1uyv.jpg",
    genre_ids: [28, 35, 80, 53],
    id: 899112,
    original_language: "en",
    original_title: "Violent Night",
    overview:
      "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
    popularity: 3488.089,
    poster_path: "/nhXjUvOvq7rJlvJFCrZMUUJ9Mn0.jpg",
    release_date: "2022-11-30",
    title: "Violent Night",
    video: false,
    vote_average: 7.8,
    vote_count: 819,
  },
  {
    adult: false,
    backdrop_path: "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg",
    genre_ids: [16, 12, 35, 10751, 14],
    id: 315162,
    original_language: "en",
    original_title: "Puss in Boots: The Last Wish",
    overview:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    popularity: 2818.964,
    poster_path: "/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg",
    release_date: "2022-12-07",
    title: "Puss in Boots: The Last Wish",
    video: false,
    vote_average: 8.3,
    vote_count: 418,
  },
  {
    adult: false,
    backdrop_path: "/dlxzUj7z1MqEcFiwvvrj0bvBKDY.jpg",
    genre_ids: [878, 27, 35],
    id: 536554,
    original_language: "en",
    original_title: "M3GAN",
    overview:
      "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
    popularity: 2804.606,
    poster_path: "/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg",
    release_date: "2022-12-28",
    title: "M3GAN",
    video: false,
    vote_average: 7,
    vote_count: 106,
  },
  {
    adult: false,
    backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    genre_ids: [28, 14, 878],
    id: 436270,
    original_language: "en",
    original_title: "Black Adam",
    overview:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    popularity: 2702.317,
    poster_path: "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
    release_date: "2022-10-19",
    title: "Black Adam",
    video: false,
    vote_average: 7.2,
    vote_count: 3557,
  },
  {
    adult: false,
    backdrop_path: "/jG52tsazn04F1fe8hPZfVv7ICKt.jpg",
    genre_ids: [10751, 35, 14],
    id: 668482,
    original_language: "en",
    original_title: "Roald Dahl's Matilda the Musical",
    overview:
      "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
    popularity: 2199.991,
    poster_path: "/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
    release_date: "2022-11-25",
    title: "Roald Dahl's Matilda the Musical",
    video: false,
    vote_average: 6.8,
    vote_count: 262,
  },
  {
    adult: false,
    backdrop_path: "/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
    genre_ids: [28, 53, 80, 18],
    id: 740952,
    original_language: "en",
    original_title: "Savage Salvation",
    overview:
      "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
    popularity: 1887.538,
    poster_path: "/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
    release_date: "2022-12-02",
    title: "Savage Salvation",
    video: false,
    vote_average: 5.5,
    vote_count: 25,
  },
];

export { navItems, styles, apiResult, content, API_KEY, imgUrl, url };
