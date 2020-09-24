import React from "react";
import Datestamp from "./datestamp";
import Pill from "./pill";

const PostListItem = props => (
  <div className="item">
    <div className="item-field">
      <div className="header">
        <div className="post-title">
          <a href={props.post.slug}>{props.post.title} </a>
        </div>
        <Datestamp value={props.post.published_at} />
      </div>
      <div className="excerpt">
        <p>
          {" "}
          <em>{props.post.excerpt}</em>{" "}
        </p>
      </div>
    </div>
    <style jsx>{`
      .item {
        margin: 5px 0px;
      }
      .item-field {
      }
      .header {
        display: flex;
        align-items: center;
      }
      .post-title {
        margin-right: 14px;
      }
      .excerpt {
        font-size: 14px;
        text-align: left;
      }
      .datestamp {
        background-color: #edf2f7;
        padding: 4px 6px;
        border-radius: 6px;
      }
    `}</style>
  </div>
);

export default PostListItem;
