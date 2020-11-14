import React, { useRef, useEffect, useState } from "react";
import {
  select,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  scaleLinear
} from "d3";

const LineChart = props => {
  const data = props.data;
  const svgRef = useRef();
  useEffect(() => {
    // Select the svg element
    const svg = select(svgRef.current);
    console.log(data);

    // Describe the line
    const myLine = line()
      .x(value => xScale(value.x))
      .y(value => yScale(value.y))
      .curve(curveCardinal);

    // X axis
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 500]);
    const xAxis = axisBottom(xScale);

    // Y axis
    const yScale = scaleLinear()
      .domain([
        Math.max.apply(
          this,
          data.map(v => v.y)
        ) * 1.03,
        Math.min.apply(
          this,
          data.map(v => v.y)
        ) * 0.95
      ])
      .range([0, 300]);
    const yAxis = axisLeft(yScale);

    // Add the data

    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");

    // svg
    //   .selectAll(".line")
    //   .data([data])
    //   .join(
    //     enter => {
    //       console.log("entering");
    //       enter
    //         .append("path")
    //         .attr("d", value => myLine(value))
    //         .attr("fill", "none")
    //         .attr("stroke", "blue");
    //     },
    //     update => {
    //       console.log("updating");
    //       update.attr("class", "updated");
    //     },
    //     exit => exit.remove()
    //   );

    // Draw the axes
    svg.select(".x-axis").call(xAxis);
    svg.select(".y-axis").call(yAxis);
  }, [data]);

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

export default LineChart;
