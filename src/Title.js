// src/Title.js

import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>SFPOPOS</h1>
          <div className='Title-Subtitle'>
           <h4>San Francisco Privately Owned Public Open Spaces</h4>
          </div>

          <div>
            <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/">List</NavLink>
            <NavLink
            className="nav-link"
            activeClassName="nav-link-active"
            exact
            to="/about">About</NavLink>
          </div>

      </header>
    </div>
  )
}

export default Title
