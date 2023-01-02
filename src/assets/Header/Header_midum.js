import React from 'react'
import heading_border_left from '../images/heading_border_left.png'
import heading_border_right from '../images/heading_border_right.png'
const Header_midum = () => {
    return (
        <div className='header-center'>
            <h2 className='h2 header-main-2'><span className='theme_color'>WE CAN</span> HELP YOUR CAREER GROW</h2>

            <div className=''>
                <p className='heading_main-p '>Get your CV Resume in 4 easy steps</p> 
                <img src={heading_border_left} alt="" className='heading_border_left ' />
                <img src={heading_border_right} alt="" className='heading_border_right' />
            </div>

        </div>
    )
}

export default Header_midum