import React from 'react'
import PostListItem from './post-list-item'

class PostList extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='post-list'>
        <div className='post-header'>
          Posts
        </div>
        {Object.keys(this.props.posts).map(key => {
          const post = this.props.posts[key]
          return (
          <div className='post-row'>
            <PostListItem post={post}/>
          </div>)
        })}
        
        <style jsx>{`
        .post-list {

        }
        .post-header {
          font-size: 20px;
        }
        .post-row {

        }
        `}</style>
      </div>
    )
  }
}
export default PostList
