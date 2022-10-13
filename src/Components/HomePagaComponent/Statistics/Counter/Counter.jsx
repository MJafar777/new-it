import React, { useState, useRef, useEffect } from "react";

const Counter = ({ start = 0, end, timer = 50 }) => {
  const [state, setState] = useState(null);
  const ref = useRef(start);

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) {
        return setState(end);
      }
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => (isMounted = false);
  }, [end, start]);
  return <>{state}</>;
};

export default Counter;
