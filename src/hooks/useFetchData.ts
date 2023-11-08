import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url, setSearchInput) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setSearchInput("");
    const controller = new AbortController();
    axios
      .get(url, {
        signal: controller.signal,
      })
      .then((res) => res)
      .then(({ data }) => {
        setData(data.results);
      })
      .catch((error) => {});
    return () => {
      controller.abort();
    };
  }, [url]);
  return data;
};

export default useFetchData;
