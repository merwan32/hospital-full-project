import React from 'react'
import '../../style/ctas.css'
import {BsCalendar3} from 'react-icons/bs'

function Ctas() {
  return (
    <div className='ctas'>
        <div className='cta'>
            <div className='icon'>
                <BsCalendar3/>
            </div>
            <div className='text'>
                Book an Appointment
            </div>
        </div>
        <div className='cta'>
            <div className='icon'>
                <BsCalendar3/>
            </div>
            <div className='text'>
                Find a Doctor
            </div>
        </div>
        <div className='cta'>
            <div className='icon'>
                <BsCalendar3/>
            </div>
            <div className='text'>
                Book a Home Test
            </div>
        </div>
        <div className='cta'>
            <div className='icon'>
                <BsCalendar3/>
            </div>
            <div className='text'>
                Book a Lab Test
            </div>
        </div>
        <div className='cta'>
            <div className='icon'>
                <BsCalendar3/>
            </div>
            <div className='text'>
                Book Health Packages
            </div>
        </div>
        <div className='cta'>
            <div className='icon'>
                <BsCalendar3/>
            </div>
            <div className='text'>
                Get anEstimate
            </div>
        </div>
    </div>
  )
}

export default Ctas