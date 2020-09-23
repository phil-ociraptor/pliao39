import React from "react";

const BookIntro = props => (
  <div>
    <div className="container">
      <div className="image-wrapper">
        <img src={props.img} alt={props.alt}></img>
      </div>
      <div className="text-wrapper">
        <p>
          <span className="heavy">Author:</span> {props.author}{" "}
        </p>
        <p>
          <span className="heavy">Who should read:</span> {props.who}
        </p>
        <p>
          <span className="heavy">Rating:</span> {props.rating} / 10
        </p>
      </div>
    </div>

    <style jsx>{`
      .container {
        display: flex;
        margin-bottom: 10px;
        align-items: center;
      }
      .image-wrapper > img {
        width: 175px;
      }
      .image-wrapper {
        width: 33%;
        margin: 0px 10px;
      }
      .heavy {
        font-weight: 800;
      }
      .text-wrapper {
        width: 67%;
      }
    `}</style>
  </div>
);

export default BookIntro;
