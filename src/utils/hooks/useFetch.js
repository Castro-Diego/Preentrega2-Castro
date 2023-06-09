import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);
  //const [error, setError] = useState(null);
  useEffect(() => {
    let getData = axios.get(endpoint);
    getData.then((res) => setData(res.data)).catch((err) => console.log(err));
  }, [endpoint]);

  return { data };
};

export default useFetch;

//useEffect("https://jsonplaceholder.typicode.com/posts ", {});
