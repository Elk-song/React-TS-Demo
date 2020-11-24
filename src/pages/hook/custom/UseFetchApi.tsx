import { useEffect, useState } from 'react';
import axios from "axios";
function useFetchApi(props: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState("")


  const [hitsPerPage, setFetchData] = useState(0);
  const doFetch = () => {
    setUrl(`http://hn.algolia.com/api/v1/search?query=${props}`);
  };

  useEffect(() => {
    if (props && url) {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
          const result = await axios(url);
          result.status === 200 && setFetchData(result.data.hitsPerPage);
        } catch (error) {
          setIsError(true)
        }
        setIsLoading(false);
      };

      fetchData();
    }

  }, [url]);
  return { hitsPerPage, isLoading, isError, doFetch };
}
export default useFetchApi;