import { useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? value : defaultValue;
  });

  const setLocal = (key, value) => {
    localStorage.setItem(key, value);
    setState(value);
  };

  return [state, setLocal];
}

export default useLocalStorage;
