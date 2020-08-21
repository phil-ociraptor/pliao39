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
      `}</style>
    </React.Fragment>
  );
};

export default Layout;
