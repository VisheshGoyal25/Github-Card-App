import React from 'react'
import Profile from './Profile.js'
import './User.css'
import Projects from './Projects.js'
function User({data}) {
    return (
        <div className='user'>
          
      <div className='item'>  <Profile  data={data}></Profile></div>
      <div className='item'>  <Projects  data={data.repos}></Projects></div>
      
        </div>
    )
}

export default User
