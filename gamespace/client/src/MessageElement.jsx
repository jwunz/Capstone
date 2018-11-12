import React from 'react';

class MessageElement extends React.Component {
  render() {
    return (
      <div className="messageContainer">
        <div className="messageBody">{this.props.message.message}</div>
        <div className="messageInfo">{this.props.message.sender}</div>
      </div>
    )
  }
}

export default MessageElement;