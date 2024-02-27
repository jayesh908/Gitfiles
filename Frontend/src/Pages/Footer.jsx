import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='text-center'>
        <h1>All Right Reserved &copy; </h1>
      </div>
      <p className='text-center mt-3'>

            <Link to='about'>About</Link>
            |
            <Link to='contact'>Contact</Link>
            |
            <Link to='policy'>Privacy And Policy</Link>

      </p>
    </div>
  )
}

export default Footer
