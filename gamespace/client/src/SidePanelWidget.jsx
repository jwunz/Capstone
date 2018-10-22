import React from 'react';
import FriendsWidget from './FriendsWidget.jsx';
import ClubsWidget from './ClubsWidget.jsx';
import ChatroomsWidget from './ChatroomsWidget.jsx';

class SidePanelWidget extends React.Component {
  render() {
    return (
      <div className="sidePanel">
        <FriendsWidget />
        <ClubsWidget />
        <ChatroomsWidget />
      </div>
    )
  }
}

export default SidePanelWidget;