import React, { useState } from "react";
import MovingAverageSelector from "./moving-average-selector";
import LineChart from "./line-chart";

// TODO move this out
// I didn't write this, thank you to the homies at
// https://observablehq.com/@d3/moving-average
function movingAverage(values, N) {
  let i = 0;
  let sum = 0;
  const means = []; // new Float64Array(values.length).fill(NaN);
  for (let n = Math.min(N - 1, values.length); i < n; ++i) {
    sum += values[i];
  }
  for (let n = values.length; i < n; ++i) {
    sum += values[i];
    means[i] = sum / N;
    sum -= values[i - N + 1];
  }
  return means;
}

// Resources
// https://observablehq.com/@d3/line-chart-with-tooltip
// https://www.youtube.com/watch?v=yhwHUmjqxQw&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B&index=4
// https://observablehq.com/@d3/gallery
// https://blog.logrocket.com/guide-to-react-useeffect-hook/

const MovingAverageChart = props => {
  const rawData = props.data;
  const [liveData, setLiveData] = useState(rawData);

  return (
    <div className="container">
      <MovingAverageSelector
        onChange={n => {
          setLiveData(oldData => {
            const ma = movingAverage(rawData, n);
            let res = ma.filter(Boolean);
            return res;
          });
        }}
      />
      <LineChart
        data={liveData.map((val, idx) => {
          return { x: idx, y: val };
        })}
      />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default MovingAverageChart;
