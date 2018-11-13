import React, { Component } from 'react'

class SignupForm extends Component {
  render() {
    return (
      <div>
        <br />
        <input type="text" name="username" placeholder="Username" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <input type="password" name="password2" placeholder="Retype password" />

        <input type="submit" name="signup-button" value="Sign Up" />
      </div>
    )
  }
}

export default SignupForm
