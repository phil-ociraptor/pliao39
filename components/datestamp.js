import React from 'react'

const monthMap = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth()
  const monthStr = monthMap[month]
  const day = date.getDate()
  const paddedDay = ("00" + day).slice(-2)
  return `${monthStr}, ${paddedDay} ${year}`
}


const Datestamp = (props) => (
  <div className="datestamp">
    {formatDate(props.value)}

    <style jsx>{`
    .datestamp {
      background-color: #EDF2F7;
      padding: 4px 6px;
      border-radius: 6px
    }
    `}</style>
  </div>
)

export default Datestamp
