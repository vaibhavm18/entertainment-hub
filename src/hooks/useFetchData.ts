import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url: string, setSearchInput: (s: string) => void) => {
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
      .catch((e) => {
        console.log(e);
      });
    return () => {
      controller.abort();
    };
  }, [url]);
  return data;
};

export default useFetchData;
