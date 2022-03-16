import { useEffect, useRef, useState } from "react";

export const TimerClock = ({ start, end }) => {
  const [time, setTime] = useState(start++);

  const ref = useRef(null);

  useEffect(() => {
    ref.interval = setInterval(() => {
      setTime((prev) => {
        if (prev === +end) {
          clearInterval(ref.interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(ref.interval);
    };
  }, [start, end]);

  const handleClear = (e) => {
    e.preventDefault();
    clearInterval(ref.interval);
    setTime(start);
  };

  return (
    <div>
      <h1>Timer: {time} </h1>

      <input onClick={handleClear} type="submit" value={"Clear"} />
    </div>
  );
};
