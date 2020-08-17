import React from "react";
import NotesListItem from "./notes-list-item";

class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="notes-list">
        <div className="notes-header">Notes</div>
        {Object.keys(this.props.notes)
          .sort((a, b) => {
            let aDate = new Date(a);
            let bDate = new Date(b);
            return bDate - aDate;
            // return aDate - bDate;
          })
          .map(key => {
            const note = this.props.notes[key];
            const meta = this.props.meta[key];
            return (
              <div key={key} className="notes-row">
                <NotesListItem note={note} meta={meta} />
              </div>
            );
          })}

        <style jsx>{`
          .notes-list {
          }
          .notes-header {
            font-size: 20px;
          }
          .notes-row {
          }
        `}</style>
      </div>
    );
  }
}
export default NotesList;
