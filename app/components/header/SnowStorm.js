import React from "react";
import "./css4.css";
const SnowStorm = () => {
  const snowflakes = Array.from({ length: 50 }, (_, index) => index);
  return (
    <div className="root">
      {snowflakes.map((index) => (
        <div key={index} className="snowflake"></div>
      ))}
      {/*       {[...Array(100)].map((_, index) => (
        <i key={index}></i>
      ))} */}
    </div>
  );
};

export default SnowStorm;
