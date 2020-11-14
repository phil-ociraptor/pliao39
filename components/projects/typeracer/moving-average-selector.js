import React, { useRef, useEffect, useState } from "react";

const MovingAverageSelector = props => {
  return (
    <div className="container">
      Moving Average Selector
      <input
        type="number"
        placeholder="10"
        onChange={e => {
          let val = parseInt(e.target.value);
          if (isNaN(val)) {
            return;
          }
          props.onChange(val);
        }}
      />
      <style jsx>{`
        svg {
          background-color: #f3f3f3;
          width: 90%;
          height: 350px;
          padding: 10px;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 50px;
        }
        .x-axis {
          transform: translateY(300px);
        }
        .y-axis {
          transform: translatex(100px);
        }
      `}</style>
    </div>
  );
};

export default MovingAverageSelector;
