import axios from "axios";
import { useEffect, useState } from "react";

// rest country api
const api_url = "https://restcountries.com/v3.1/all";

const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api_url)
      .then((res) => {
        setCountries(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
  }, []);
  return { countries, setCountries, isLoading, isError };
};
export default useCountries;
