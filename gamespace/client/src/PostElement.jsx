import React from 'react';

class PostElement extends React.Component {
  render() {
    return (
      <div className="postContainer">
        <div className="postHeader">
          <div className="posterName">Username</div>
          <div className="postedTime">00:00 today</div>
        </div>
        <div className="postBody">This is where the body of the post will go, once I actually have posts that have bodies to display!</div>
      </div>
    )
  }
}

export default PostElement;