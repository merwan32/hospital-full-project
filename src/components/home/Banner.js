import React from 'react'
import '../../style/banner.css'
import banner1 from '../../images/banner/banner1.png'
import {BsFillArrowRightCircleFill ,BsFillArrowLeftCircleFill} from 'react-icons/bs'

function Banner() {
  return (
    <div className='banner'>
        <div className='img'>
            <button className='arrow'>
                <BsFillArrowLeftCircleFill/>
            </button>
            
            <div className='text'>
                <h2>weelcome to <br/>our hospital</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum vivamus augue cursus eget sagittis etiam.</p>
                <button>know more</button>
            </div>
            <img src={banner1} />
            <button className='arrow right'>
                <BsFillArrowRightCircleFill />
            </button>
            
        </div>
    </div>
  )
}

export default Banner