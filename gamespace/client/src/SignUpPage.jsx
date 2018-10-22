import React from 'react';

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

export default SignUpPage;