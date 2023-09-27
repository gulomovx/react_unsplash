import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const getAxios = (url) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  console.log(response);
  axios.defaults.baseURL = "https://api.unsplash.com/";
  const fetchData = async (url) => {
    console.log("api");
    try {
      setIsloading(true);
      const res = await axios(url);

      setResponse(res.data.results);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};
export default getAxios;
