import React from 'react'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
const Layout_4 = () => {
  return (
    <div className='section-4'>
        <div className='row'>
                <div className='col-3'>
                   <img src={icon1} alt=""/>
                   <h4 className='mr-3'>Responsive CV Templates</h4>
                </div>
                <div className='col-3'>
                <img src={icon2} alt=""/>
                <h4 className='mr-3'>Designed for Professionals</h4>
                </div>
                <div className='col-3'>
                <img src={icon3} alt=""/>
                <h4 className='mr-3'>Faster interview calls</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the scrambled it to make a type specimen book. It has survived not only fiv</p>
        </div>
    </div>
  )
}

export default Layout_4