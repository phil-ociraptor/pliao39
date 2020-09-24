import React from "react";

const Pill = props => (
  <div>
    <div className="container">{props.value}</div>

    <style jsx>{`
      .container {
        font-size: 12px;
        background-color: #edf2f7;
        padding: 1px 4px;
        border-radius: 6px;
        width: max-content;
      }
    `}</style>
  </div>
);

export default Pill;
