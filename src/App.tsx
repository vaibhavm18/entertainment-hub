import { Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Header from "./components/Header";
import { NotFound } from "./components/NotFound";
import WatchLater from "./components/WatchLater";
import { pages } from "./constant";

const App = () => {
  return (
    <div className="h-screen w-screen font-serif  bg-gray-900 text-white flex flex-col xs:flex-row p-8 gap-4 ">
      <Header />
      <Routes>
        {pages.map((page, index) => {
          return (
            <Route
              key={index}
              path={page.path}
              element={<Content type={page.type} />}
            />
          );
        })}
        <Route element={<WatchLater />} path={"/watchlater"} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
