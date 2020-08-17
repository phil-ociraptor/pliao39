import React from "react";
import { toHashLink } from "../../utils/markdown-tools";
import Datestamp from "../datestamp";
import Pill from "../pill";

const Hashtag = props => {
  return (
    <div className="hashtag">
      <span className="decoration">#</span>
      <a href={props.link}>{props.value}</a>
      <style jsx>{`
        .hashtag {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0px 5px;
          font-size: 14px;
        }
        .hashtag .decoration {
          opacity: 0;
        }
        .hashtag:hover .decoration {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Hashtag;
