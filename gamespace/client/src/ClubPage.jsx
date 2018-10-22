import React from 'react';
import SidePanelWidget from './SidePanelWidget.jsx';

class ClubPage extends React.Component {
  render() {
    return (
      <div className="pageBody clubBody">
        <SidePanelWidget />
        <div className="pageContent clubContent">
          <div className="clubInfo">
            <img src="FairyPenguin.jpg" className="clubPic"></img>
            <div className="clubPageNameAndButtons">
              <h2 className="clubPageName">Username</h2>
              <div className="clubPageButtons">
                <button className="clubPageButton chatButton">Chat</button>
                <button className="clubPageButton joinLeaveButton">Friend</button>
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

export default ClubPage;