import React from 'react'
import '../style/top.css'
import { SocialIcon } from 'react-social-icons';

function Top() {
  return (
    <div className='top'>
        <ul className='left'>
            <li>about us | </li>
            <li>news & media | </li>
            <li>academics | </li>
            <li>testmonials | </li>
            <li>careers | </li>
            <li>contact </li>
        </ul>
        <ul className='right'>
            <li>
                follow us on :
            </li>
            <li>
                <SocialIcon url="https://facebook.com/jaketrent"/>
            </li>
            <li>
                <SocialIcon url="https://twitter.com/jaketrent"/>
            </li>
            <li>
                <SocialIcon url="https://instagram.com/jaketrent"/>
            </li>
            <li>
                <SocialIcon url="https://linkedin.com/jaketrent"/>
            </li>
        </ul>
    </div>
  )
}

export default Top