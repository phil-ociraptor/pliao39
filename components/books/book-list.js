import React from "react";
import BookListItem from "./book-list-item";

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-list">
        <div className="book-header">Books</div>
        {Object.keys(this.props.books)
          .sort((a, b) => {
            let aDate = new Date(this.props.books[a].lastUpdated);
            let bDate = new Date(this.props.books[b].lastUpdated);
            return bDate - aDate;
            // return aDate - bDate;
          })
          .map(slug => {
            const book = this.props.books[slug];
            return (
              <div key={slug} className="book-row">
                <BookListItem book={book} slug={slug} />
              </div>
            );
          })}

        <style jsx>{`
          .book-list {
          }
          .book-header {
            font-size: 20px;
          }
          .book-row {
          }
        `}</style>
      </div>
    );
  }
}
export default BookList;
