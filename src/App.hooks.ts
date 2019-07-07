import { useState, useCallback } from 'react';

export const useValueState = (initalValue: number) => {
  const [ value, setValue ] = useState(initalValue);

  const incrementValue = useCallback(
    () => {
      setValue(value + 1);
    },
    [
      value,
      setValue,
    ]
  );

  const decrementValue = useCallback(
    () => {
      setValue(value - 1);
    },
    [
      value,
      setValue,
    ]
  );

  return {
    value,
    setValue,
    incrementValue,
    decrementValue,
  };
};
