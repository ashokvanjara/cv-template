import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Foooter from '../../assets/footer/Foooter'
import Header_midum from '../../assets/Header/Header_midum'
import Layout_1 from '../../assets/Header/Layout_1'
import Layout_2 from '../../assets/Header/Layout_2'
import Layout_3 from '../../assets/Header/Layout_3'
import Layout_4 from '../../assets/Header/Layout_4'
import slider_01 from '../../assets/images/slider_01.jpg'
import Flickr_logo from '../../assets/Loading/Flickr_logo.gif'
import style from '../../assets/Loading/style.css'
import resume_img2 from '../../assets/images/resume_img2.png'

import Carousel from 'react-bootstrap/Carousel';//this is the slider for example

const Home = () => {
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate()
  const contecpage = () => {
    naviagte("/Contect")
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (

    <div className='home-page'>
      {
        loading ? (
          <>
            <img src={Flickr_logo} alt="" className='loading' />
            <h4 className='text-center h4-loading'>please wait</h4></>
        ) : <>
          {/* <div className='row'>
            <div className='slider-img'>
              <img src={slider_01} alt="" />
            </div>
           
          </div>  */}


          {/* is there slider   component */}
          <Carousel slide={true} className="mt-2">
            <Carousel.Item>
              <img
                className="d-block w-100 img-size"
                src={slider_01}
                alt="First slide"

              />
              <Carousel.Caption>
                <div className='header-content'>
                  <h1 className='h1 heading-h1'><strong>EASILY</strong> CREATE ONLINE</h1>
                  <h4 className='h2 h2-heading'>CV AND PROFESSIONAL
                    RESUME IN MINUTES</h4>
                  {/* <p>Showcase your Profile to the world
                    using online CV builder and Get Hired Faste</p> */}
                  <button type="submit" className='header-btn' onClick={() => contecpage()}>contect us</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={slider_01}
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className='header-content'>
                  <h1 className='h1 heading-h1'><strong>EASILY</strong> CREATE ONLINE</h1>
                  <h4 className='h2 h2-heading'>CV AND PROFESSIONAL
                    RESUME IN MINUTES</h4>
                  <p>Showcase your Profile to the world
                    using online CV builder and Get Hired Faste</p>
                  <button type="submit" className='header-btn' onClick={() => contecpage()}>contect us</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
          <Header_midum />
          <Layout_1 />
          <Layout_2 />
          <Layout_3 />
          <Layout_4 />
          <Foooter /></>
      }
    </div>

  )
}

export default Home