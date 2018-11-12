import React from 'react';
import SidePanelWidget from './SidePanelWidget.jsx';
import MessageElement from './MessageElement.jsx';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8080');


class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.updateMessages = this.updateMessages.bind(this);
    
    socket.on('newMessage', (message) => {
      var newMessages = this.state.messages.concat(message);
      this.setState({
        messages: newMessages
      });
    });
  }

  state = {
    messages: [],
    messageBox: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendMessage = (e) => {
    e.preventDefault();

    const message = this.state.messageBox;
    socket.emit('message', message);
  }

  updateMessages(message) {
    console.log(`message recieved: `);
    this.setState({
      messages: this.state.messages.push(message)
    })
  }

  render() {
    return (
      <div className="pageBody chatBody">
        <SidePanelWidget />
        <div className="pageContent chatContent">
          <div className="chatArea">
            {this.state.messages.map((message, index) => <MessageElement message={message} key={index} />)}
          </div>
          <form className="messageForm">
            <input type="text" placeholder="Type a message!" className="messageInput" name='messageBox' onChange={this.onChange}></input>
            <input type="submit" value="Send" onClick={this.sendMessage}></input>
          </form>
        </div>
      </div>
    )
  }
}

socket.on('usersUpdate', function(userList) {
  console.log(userList);

  
})

// socket.on('message', function(message) {
//   ChatPage.messages.push(message);
// })


export default ChatPage;