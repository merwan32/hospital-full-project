import React from 'react'
import '../style/header.css'
import { FiSearch} from 'react-icons/fi';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEventAvailable} from 'react-icons/md'
import logo from '../images/logo.png'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='informations'>
        <div className='search'>
          <FiSearch/>
        </div>
        <div className='phone'>
          <BsFillTelephoneFill/>
          <h2>022-999-888</h2>
        </div>
        <div className='book'>
          <MdEventAvailable/>
          <h2>book an appointement</h2>
        </div>
      </div>
    </div>
  )
}

export default Header