import React from 'react';
import { connect } from 'react-redux';
import { addUser } from './actions/userActions';

class SignUpPage extends React.Component {
  state = {
    username: '',
    password: '',
    password2: '',
    email: '',
    dob: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      dob: this.state.dob
    };

    console.log(newUser);

    this.props.addUser(newUser);
  }

  render() {
    return (
      <div>
        <h1>Sign Up Today, It's FREE!</h1>
        <div className="signUpBody">
          <div>
            <form className="signUpForm">
              <input type="text"  name="email" onChange={this.onChange} placeholder="Email"></input>
              <input type="text"  name="username" onChange={this.onChange} placeholder="Desired Username"></input>
              <input type="password"  name="password" onChange={this.onChange} placeholder="Password"></input>
              <input type="password"  name="password2" onChange={this.onChange} placeholder="Confirm Password"></input>
              <div>
                <div>Date of Birth</div>
                <input type="date" name="dob" onChange={this.onChange} ></input>
              </div>
              <input type="button" value="Sign Up!" onClick={this.onSubmit} ></input>
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

const mapStateToProps = state => ({
  email: state.email,
  username: state.username,
  password: state.password,
  dob: state.dob
})

export default connect(mapStateToProps, { addUser })(SignUpPage);