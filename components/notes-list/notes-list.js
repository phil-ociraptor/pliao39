import React from "react";
import NotesListItem from "./notes-list-item";

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-list">
        <div className="post-header">Notes</div>
        {Object.keys(this.props.posts).map(key => {
          const post = this.props.posts[key];
          return (
            <div className="post-row">
              <NotesListItem post={post} />
            </div>
          );
        })}

        <style jsx>{`
          .post-list {
          }
          .post-header {
            font-size: 20px;
          }
          .post-row {
          }
        `}</style>
      </div>
    );
  }
}
export default NotesList;
