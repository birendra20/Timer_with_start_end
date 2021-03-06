import { useState } from "react";
import { TimerClock } from "./TimerFunction";

export const Timer = () => {
  const [start, setStart] = useState(false);

  const [data, setData] = useState({
    startTime: "",
    endTime: ""
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStart(true);
  };

  return (
    <>
      <h2>Increment Timer</h2>
      <p>Set the Start and End Time to Start the Timer</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="startTime"
            type="number"
            placeholder="Enter Start Time"
          />
          <input
            onChange={handleChange}
            name="endTime"
            type="number"
            placeholder="Enter End Time"
          />
          <input type="submit" value={"Start"} />
        </form>
      </div>

      <div>
        {start ? (
          <TimerClock start={data.startTime} end={data.endTime} />
        ) : null}
      </div>
    </>
  );
};
