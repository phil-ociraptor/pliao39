import React from "react";

const BookListItem = props => {
  const link = `books/${props.slug}`;
  return (
    <div className="item">
      <div className="image-wrapper">
        <img src={props.book.img} alt={props.book.title}></img>
      </div>
      <div className="metadata-wrapper">
        <div className="book-title">
          <a href={link}>
            {props.book.title} - <em>{props.book.author} </em>{" "}
          </a>
        </div>
        <div className="book-description">
          <div>{props.book.description}</div>
        </div>
      </div>
      <div className="symbol-wrapper">
        <p>
          <span className="heavy">Rating:</span>{" "}
          {props.book.rating || props.rating} / 10
        </p>
      </div>
      <style jsx>{`
        .item {
          display: grid;
          grid-template-columns: 100px auto 60px;
          column-gap: 8px;
          margin: 5px 0px;
        }
        .image-wrapper {
          align-self: center;
          justify-self: center;
        }
        .metadata-wrapper {
          align-self: center;
        }
        .symbol-wrapper {
          align-self: start;
          justify-self: center;
        }
        .item-field {
          margin: 0px 10px;
          display: flex;
        }
        .book-title {
          display: flex;
          flex-direction: row;
        }
        .book-description {
          font-size: 14px;
          line-height: 18px;
        }
        .image-wrapper > img {
          max-height: 120px;
        }
        .heavy {
          font-weight: 800;
        }
      `}</style>
    </div>
  );
};

export default BookListItem;
