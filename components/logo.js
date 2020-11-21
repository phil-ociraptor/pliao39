import React from "react";
import Phil from "./phil";

const widths = {
  large: 150,
  medium: 100,
  small: 50
};

const Logo = props => {
  const size = props.size || "medium";
  const width = widths[size];
  const className = `header ${size}`;

  return (
    <a href="/" className={className}>
      <div className="profile-pic">
        <Phil width={width} />
      </div>
      <div>Phil Liao</div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .profile-pic {
          padding: 0px 10px;
        }
        a {
          color: #000000;
          text-decoration: none;
        }
        a.small {
          font-size: 18px;
        }
        a.medium {
          font-size: 24px;
        }
        a.large {
          font-size: 48px;
        }
      `}</style>
    </a>
  );
};

export default Logo;
