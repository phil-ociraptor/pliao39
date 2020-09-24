import React from "react";
import PostListItem from "./post-list-item";

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-list">
        <div className="post-header">Posts</div>
        <div className="post-row-container">
          <div>
            {Object.keys(this.props.posts).map(key => {
              const post = this.props.posts[key];
              return (
                <div key={key} className="post-row">
                  <PostListItem post={post} />
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .post-list {
          }
          .post-header {
            font-size: 20px;
          }
          .post-row-container {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
          }
          .post-row {
          }
        `}</style>
      </div>
    );
  }
}
export default PostList;
