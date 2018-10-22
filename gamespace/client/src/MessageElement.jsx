import React from 'react';

class MessageElement extends React.Component {
  render() {
    return (
      <div className="messageContainer">
        <div className="messageBody">This is what a message body looks like!</div>
        <div classname="messageInfo">Sender - 5m ago</div>
      </div>
    )
  }
}

export default MessageElement;