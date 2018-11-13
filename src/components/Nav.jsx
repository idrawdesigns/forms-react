import React from 'react'
import { NavLink, Route } from 'react-router-dom'

import Login from './LoginForm'
import SignUp from './signUpForm'
import './nav.scss'

const Nav = () => {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Login
      </NavLink>
      <NavLink activeClassName="active" to="/signup">
        Sign Up
      </NavLink>

      <Route path="/" exact component={Login} />
      <Route path="/signup" component={SignUp} />
    </nav>
  )
}

export default Nav
