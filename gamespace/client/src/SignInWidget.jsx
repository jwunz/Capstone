import React from 'react';

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

export default SignInWidget;