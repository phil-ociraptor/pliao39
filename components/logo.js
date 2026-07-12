import React from "react";

const widths = {
  large: 120,
  medium: 64,
  small: 32
};

const Logo = props => {
  const size = props.size || "medium";
  const width = widths[size];
  const className = `header ${size}`;

  return (
    <a href="/" className={className}>
      <img className="profile-pic" src="/favicon.svg" alt="Phil Liao" />
      <div>Phil Liao</div>
      <style jsx>{`
        .header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          color: #111;
          text-decoration: none;
        }
        .profile-pic {
          display: block;
          flex-shrink: 0;
        }
        .header.small { font-size: 15px; }
        .header.medium { font-size: 22px; }
        .header.large { font-size: 40px; }
      `}</style>
    </a>
  );
};

export default Logo;
