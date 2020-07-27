import React from "react";
import Datestamp from "../datestamp";
import Pill from "../pill";

const NotesListItem = props => (
  <div className="item">
    <div className="item-field">
      <a href={`weekly_notes/${props.post.title}`}>{props.post.title} </a>
    </div>
    <div className="item-field">
      <Pill value={props.post.tags && props.post.tags[0].name} />
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
      }
      .datestamp {
        background-color: #edf2f7;
        padding: 4px 6px;
        border-radius: 6px;
      }
    `}</style>
  </div>
);

export default NotesListItem;
