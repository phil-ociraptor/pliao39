import React from 'react'

const Phil = (props) => (
  <React.Fragment>
    <img className="picture"
     width={props.width}
     src="/phil.jpg"
     alt="A picture of Phil"></img>

    <style jsx>{`
    .picture {
      // width: 100px;
      border-radius: 9999999px
    }
    `}</style>
  </React.Fragment>
)

export default Phil
