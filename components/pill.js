import React from 'react'

const Pill = (props) => (
  <div className="datestamp">
    {props.value}

    <style jsx>{`
    .datestamp {
      background-color: #EDF2F7;
      padding: 4px 6px;
      border-radius: 6px
    }
    `}</style>
  </div>
)

export default Pill
