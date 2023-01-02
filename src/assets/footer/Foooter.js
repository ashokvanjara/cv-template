import React from 'react'
import footer_logo from '../images/footer_logo.png'
import social1 from '../images/social1.png'
import social2 from '../images/social2.png'
import social3 from '../images/social3.png'
const Foooter = () => {
  return (
    <div>
      <section className='layout-footer'>
        <div className='container'>
          <div className='footer-logo'>
            <img src={footer_logo} alt="" />
          </div>
          <div className=''>
            <h4 className='text-white'>Contect us</h4>
          </div>
          <div className='details-all d-flex text-center'>
            <div className='col-3'>
              <h1><i className="fa-sharp fa-solid fa-location-pin text-white"></i></h1>
              <p className='text-white'>New naroda<br />
              Ahemdabad Gujrat Ind</p>
            </div>
            <div className='col-3'>
              <h1>   <i className="fa-solid fa-envelope text-white"></i></h1>
              <p className='text-white'>ashokvanjara@gmail.com<br />
                avi@gmail.com</p>

            </div>
            <div className='col-3'>

              <h1> <i className="fa-solid fa-phone-volume text-white "></i></h1>
              <p className='text-white'>+91 7586656566 <br />
                +91 7586656566</p>
            </div>
          </div>
          <div className='img-icon'>
          <i className="fa-brands fa-facebook text-white px-2" id='i-con'></i>
          <i className="fa-brands fa-twitter text-white px-2" id='i-con'></i>
          <i className="fa-brands fa-instagram text-white px-2" id='i-con'></i>
          <i className="fa-brands fa-square-whatsapp text-white px-2" id='i-con'></i>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Foooter