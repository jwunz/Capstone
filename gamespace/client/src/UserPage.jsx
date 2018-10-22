import React from 'react';

class UserPage extends React.Component {
  render() {
    return (
      <div className="pageBody userBody">
        <SidePanelWidget />
        <div className="pageContent userContent">
          <div className="userInfo">
            <img src="/FairyPenguin.jpg" className="userPic"></img>
            <div className="userPageNameAndButtons">
              <h2 className="userPageName">Username</h2>
              <div className="userPageButtons">
                <button className="userPageButton chatButton">Chat</button>
                <button className="userPageButton friendUnfriendButton">Friend</button>
              </div>
            </div>
            <div className="otherUserInfo">Any other user info will go over here.</div>
          </div>
          <div className="userPosts"></div>
        </div>
      </div>
    )
  }
}

export default UserPage;