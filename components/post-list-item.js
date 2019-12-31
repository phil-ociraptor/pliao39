import React from 'react'
import Datestamp from './datestamp'
import Pill from './pill'

const PostListItem = (props) => (
  <div className='item'>
    <div className='item-field'>
      <Datestamp value={props.post.published_at}/>
    </div>
    <div className='item-field'>
      <a href={props.post.slug}>{props.post.title} </a>
    </div>
    <div className='item-field'>
      <Pill value={props.post.tags && props.post.tags[0].name}/>
    </div>
    <style jsx>{`
    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 5px 0px;
    }
    .item-field {
      margin: 0px 10px;
    }
    .datestamp {
      background-color: #EDF2F7;
      padding: 4px 6px;
      border-radius: 6px
    }
    `}</style>
  </div>
)

export default PostListItem
