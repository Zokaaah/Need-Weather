import React from "react";

const useDebounce = (FN, delay) => {
  const timeOutRef = React.useRef(null);

  function DebouncedFN(...args) {
    window.clearTimeout(timeOutRef.current);

    timeOutRef.current = window.setTimeout(() => {
      FN(...args);
    }, delay);
  }
  return DebouncedFN;
};

export default useDebounce;
