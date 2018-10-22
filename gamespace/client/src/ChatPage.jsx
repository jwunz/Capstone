import React from 'react';
import SidePanelWidget from './SidePanelWidget.jsx';
import MessageElement from './MessageElement.jsx';

class ChatPage extends React.Component {
  render() {
    return (
      <div className="pageBody chatBody">
        <SidePanelWidget />
        <div className="pageContent chatContent">
          <div className="chatArea">
            <MessageElement />
          </div>
          <form className="messageForm">
            <input type="text" placeholder="Type a message!" className="messageInput"></input>
            <input type="submit" value="Send"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default ChatPage;