import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <header>
          <div className="appHeader">
            <div className="leftHeaderContainer">
              <img className="logo" src="logo.png" alt=""></img>
              <SearchWidget />
            </div>
            <SignInWidget />
          </div>
        </header>
        <div className="bodyContent">
          <UserPage />
        </div>
      </div>
    );
  }
}

class SearchWidget extends React.Component {
  render() {
    return (
      <form className="searchWidget">
        <input type="text" placeholder="Search for Users and Clubs"></input>
        <input type="submit" value="Search"></input>
      </form>
    )
  }
}

class SignInWidget extends React.Component {
  render() {
    return (
      <form className="signInWidget">
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input type="submit" value="Sign In"></input>
      </form>
    )
  }
}

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up Today, It's FREE!</h1>
        <div className="signUpBody">
          <div>
            <form className="signUpForm">
              <input type="text" placeholder="Email"></input>
              <input type="text" placeholder="Desired Username"></input>
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Confirm Password"></input>
              <div>
                <div>Date of Birth</div>
                <input type="date"></input>
              </div>
              <input type="submit" value="Sign Up!"></input>
            </form>
          </div>
          <div>
            <p>As a member, you will get access to awesome, gamer-focused features, such as:</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <div className="pageBody homeBody">
        <SidePanelWidget />
        <div className="pageContent homeContent">
          <NewPostWidget />
          <PostElement />
        </div>
      </div>
    )
  }
}

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

class SearchPage extends React.Component {
  render() {
    return (
      <div className="pageBody searchBody">
        <SidePanelWidget />
        <div className="pageContent searchContent">
          
        </div>
      </div>
    )
  }
}

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

class FriendsWidget extends React.Component {
  render() {
    return (
      <div className="friendsContent">
        <h3 className="panelHeading">Friends</h3>
        <ul className="friendsList">
        </ul>
      </div>
    )
  }
}

class ClubsWidget extends React.Component {
  render() {
    return (
      <div className="clubsContent">
        <h3 className="panelHeading">Clubs</h3>
        <ul className="clubsList">
        </ul>
      </div>
    )
  }
}

class ChatroomsWidget extends React.Component {
  render() {
    return (
      <div className="chatroomsContent">
        <h3 className="panelHeading">Chatrooms</h3>
        <ul className="chatroomsList">
        </ul>
      </div>
    )
  }
}

export default App;
