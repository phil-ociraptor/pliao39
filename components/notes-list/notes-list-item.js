import React from "react";
import { toHashLink } from "../../utils/markdown-tools";
import Hashtag from "./hashtag";
import Datestamp from "../datestamp";
import Pill from "../pill";

const NotesListItem = props => {
  const link = `weekly_notes/${props.note.title}`;
  return (
    <div className="item">
      <div className="item-field">
        <a href={link}>{props.note.title} </a>
      </div>
      <div className="item-field">
        {props.meta &&
          props.meta.sections &&
          props.meta.sections.map(s => {
            const hashLink = `${link}${toHashLink(s)}`;
            return <Hashtag key={s} value={s} link={hashLink} />;
          })}
      </div>
      <style jsx>{`
        .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 5px 0px;
        }
        .item-field {
          margin: 0px 10px;
          display: flex;
        }
        .datestamp {
          background-color: #edf2f7;
          padding: 4px 6px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default NotesListItem;
