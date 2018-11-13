import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <input type="submit" name="log-in-button" value="Sign In" />
      </div>
    )
  }
}

export default LoginForm
