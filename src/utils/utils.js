import { useState, useEffect } from 'react';
export const compare = propName => (obj1, obj2) => {
    if (obj1[propName].toString().toLowerCase() < obj2[propName].toString().toLowerCase()) {
        return -1;
    }
    if (obj1[propName].toString().toLowerCase() > obj2[propName].toString().toLowerCase()) {
        return 1;
    }
    return 0;
};

export const getDataKeys = data => (
    Object.keys(data[0])
);

export const useDebounce = (value, delay) => {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    },
    [value, delay] 
  );

  return debouncedValue;
}