import React from "react";

const Layout = props => {
  return (
    <React.Fragment>
      {props.children}
      <style jsx global>{`
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
      `}</style>
    </React.Fragment>
  );
};

export default Layout;
