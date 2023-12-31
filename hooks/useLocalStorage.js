import { useEffect, useState } from 'react';

// https://www.youtube.com/watch?v=igmAJCCSILY
function useLocalStorage(initialValue, key) {
  const getValue = () => {
    const storage = localStorage.getItem(key); // string \\ null

    if (storage) {
      return JSON.parse(storage);
    }

    return initialValue;
  };
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export { useLocalStorage };
