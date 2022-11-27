import { useState } from 'react';
import { useQuery } from 'react-query';

const useQueryWithUrl = <T>(initUrl: string) => {
  const [url, setUrl] = useState(initUrl);
  const useQueryData = useQuery<T>(url, () =>
    fetch(url).then((res) => res.json())
  );

  return { ...useQueryData, setUrl };
};

export default useQueryWithUrl;
