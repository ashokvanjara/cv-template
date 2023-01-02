import React from 'react'
import { Link } from 'react-router-dom'
// import footer_logo from '../images/footer_logo.png'
import header_img from '../images/header_img.png'
import logo from '../images/logo.png'
const Navbar = () => {
  return (
    <>
      <div className='nav-logo'>
        <img src={header_img} alt="" />
        <div className='img'>
          <img src={logo} alt="" className='img-1' />
        </div>
      </div>
      <div className='main-nav'>
        <div className='nav-link-all d-flex'>
          <div className='col-2'>
            <Link to={"/"}>Home</Link>
          </div>
          <div className='col-2'>
            <Link to={"/about"}>about us</Link>
          </div>
          <div className='col-2'>
            <Link to={"/createcv"}>createCv</Link>
          </div>
          <div className='col-2'>
            <Link to={"/contect"}>contect us</Link>
          </div>
          <div className='col-2 signup-btn'>
            <Link to={"/signup"}>signup</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar    