import React from 'react'

class PostBody extends React.Component {

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <React.Fragment>
        <div className='body' dangerouslySetInnerHTML={{ __html: this.props.value }} />
        
        <style jsx>{`
          .body {
            max-width: 880px;
            padding: 10px 0px;
            white-space: pre-wrap;
          }
          :global(figure) {
            width: 100%;
          }
          :global(body) {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
              Helvetica, sans-serif;
          }
        `}</style>
      </React.Fragment>
    )
  }
}
export default PostBody
