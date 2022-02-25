import React from 'react'

function CommentDetail(props) {
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.imgUrl()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date"> {props.timeAgo}</span>
          </div>
          <div className="text">Nice Blog Post!!</div>
        </div>
      </div>
  )
}

export default CommentDetail