import React from 'react';

class NewPostWidget extends React.Component {
  render() {
    return (
      <div className="newPostContainer">
        <form className="newPostForm">
          <input type="text" placeholder="Write a post!" className="newPostInput"></input>
          <input type="submit" value="Post"></input>
        </form>
      </div>
    )
  }
}

export default NewPostWidget;