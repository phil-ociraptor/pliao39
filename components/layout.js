import React from "react";

const Layout = props => {
  return (
    <React.Fragment>
      <div className="page-container">
        <div className="post-container">{props.children}</div>
      </div>
      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, "Open Sans",
            sans-serif;
          line-height: 24px;
          font-weight: 300;
        }
        a {
          text-decoration: none;
          color: #ea9a00;
        }
        a:hover {
          text-decoration: underline;
          text-decoration-color: #686868;
          text-decoration-thickness: 2px;
        }
        img {
          max-width: 100%;
        }
        blockquote {
          padding: 0px 10px;
          border-left: solid;
          border-color: #ffca65;
          font-style: italic;
        }
        hr {
          border: 1px solid #cecece;
          width: 95%;
          margin: 25px 0px;
        }
        figure {
          width: 100%;
          max-width: 880px;
          margin: 10px 0px;
        }
        figcaption {
          font-style: italic;
          text-align: center;
          font-size: 10pt;
        }
        .page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
          // width: 100%;
        }
        .post-container {
          display: flex;
          flex-direction: column;
          align-items: left;
          max-width: 600px;
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Layout;
