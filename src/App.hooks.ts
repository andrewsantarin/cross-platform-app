import { useState, useCallback } from 'react';

/**
 * Creates a set of state management features of the current value.
 * 
 * - `value`: the current value
 * - `setValue`: the default React `setState` from  `useState`
 * - `incrementValue` : adds to the current value according to the "addend" `stepValue`
 * - `decrementValue` : subtracts from the current value according to the "addend" `stepValue`
 *
 * @export
 * @param {number} [initalValue=0] Starting number. Defaults to `0`.
 * @param {number} [stepValue=1] Amount to add to the current value. Defaults to `1`.
 * @returns The value state management functions.
 */
export function useValueState(initalValue: number = 0, stepValue: number = 1) {
  const [ value, setValue ] = useState(initalValue);

  const incrementValue = useCallback(
    () => {
      setValue(value + stepValue);
    },
    [
      value,
      setValue,
    ]
  );

  const decrementValue = useCallback(
    () => {
      setValue(value - stepValue);
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
}
