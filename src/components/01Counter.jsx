import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [counter, setCounter] = useState(3)

  const handleIncrement = () => {
    setCounter(counter <= 19 ? counter + 1 : counter)
    // this is callback in useState which update state separately
    // setCounter(prevCounter => prevCounter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter > 0 ? counter - 1 : 0)
  }
  console.log("counter value: ", counter)

  return (
    <>
      <div className="counterContianer flex flex-col gap-5 justify-center items-center py-5">
        <h3 className=" bg-yellow-300 font-semibold ">Count Inc/Dec Values </h3>
        <div className="flex">
          <button className="bg-blue-200 rounded-md border-2 px-2 mx-3" onClick={handleDecrement}>Decrease Val</button>
          <p>Count value: {counter}</p>
          <button className="bg-blue-200 rounded-md border-2 px-2 mx-3" onClick={handleIncrement}>Increase Val</button>
        </div>
      </div>
    </>
  )
}
export default Counter;
