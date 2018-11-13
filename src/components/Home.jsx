import React from 'react'
import './home.scss'

//components
import Nav from './Nav'

const Home = () => {
  return (
    <div className="wrapper">
      <div className="left-box">
        <Nav />
      </div>
      <div className="right-box" />
    </div>
  )
}

export default Home
