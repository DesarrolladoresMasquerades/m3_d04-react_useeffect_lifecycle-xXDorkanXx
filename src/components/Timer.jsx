import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(
      ()=>{
        console.log("I am having a useEffect here, please be quite!");

        const intervalId = setInterval(() => {
            setCount((currentCount)=> currentCount + 1);
        }, 1 * 1000);

        return ()=>{clearInterval(intervalId)} // cleanup runs AFTER useEffect has finished --> like close connection to DB;

      }, []); //empty, sate.isLoaded, props.reload, some id


    useEffect(() => {
        // <== ADD
        console.log("useEffect - on update");
        document.title = "Timer app count is: " + count;
    }, [count]);

    // 1. setInterval continuously calls `setCount` that updates the state
    // 2. Each time the state updates component re-renders
    // 3. When component re-renders, code runs again and creates a new setInterval timer
    // 4. This way multiple setIntervals are created causing an increasing
    //    amount of re-renders until there is too many and component crashes.

    //   const intervalId = setInterval(() => {
    //     console.log("intervalId: ", intervalId);
    //     setCount(count + 1);
    //   }, 1000);

  return (
    <div className="Timer">
      <h2>Timer</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default Timer;