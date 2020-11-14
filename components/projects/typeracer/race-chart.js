import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  scaleLinear
} from "d3";
let data = require("../../../data/typeracer.json");

// Resources
// https://observablehq.com/@d3/line-chart-with-tooltip
// https://www.youtube.com/watch?v=yhwHUmjqxQw&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B&index=4
// https://observablehq.com/@d3/gallery
// https://blog.logrocket.com/guide-to-react-useeffect-hook/

// TODO move this out
// I didn't write this, thank you to the homies at
// https://observablehq.com/@d3/moving-average
function movingAverage(values, N) {
  let i = 0;
  let sum = 0;
  const means = new Float64Array(values.length).fill(NaN);
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

const RaceChart = props => {
  const [raceData, setRaceData] = useState(data);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => xScale(value.gn))
      // .x((value, index) => value.gn / 10)
      .y(value => {
        return yScale(value.wpm);
      })
      .curve(curveCardinal);

    const xScale = scaleLinear()
      .domain([0, raceData.length - 1])
      .range([0, 500]);
    const xAxis = axisBottom(xScale);

    const yScale = scaleLinear()
      .domain([
        Math.max.apply(
          this,
          raceData.map(x => x.wpm)
        ) * 1.25,
        Math.min.apply(
          this,
          raceData.map(x => x.wpm)
        ) * 0.5
      ])
      .range([0, 300]);
    const yAxis = axisLeft(yScale);

    // myLine;
    // svg.append("g")
    // .call()
    svg
      .selectAll(".line")
      .data([raceData])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");

    svg.select(".x-axis").call(xAxis);
    svg.select(".y-axis").call(yAxis);
    console.log("svg: ", svg);
  }, [raceData]);

  return (
    <div className="container">
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
        <path className="line" d="" stroke="blue" fill="none"></path>
      </svg>
      <style jsx>{`
        svg {
          background-color: #f3f3f3;
          width: 90%;
          height: 350px;
          padding: 10px;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
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

export default RaceChart;
