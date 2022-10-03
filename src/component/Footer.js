import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <a href='/'> Return to home</a>
      <Link to='/'><Button >Go to Home</Button></Link>
      
    </div>
  )
}

export default Footer
