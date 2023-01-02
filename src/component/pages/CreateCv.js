import React, { useState, useEffect } from 'react'
import Foooter from '../../assets/footer/Foooter'
import Header_midum from '../../assets/Header/Header_midum'
import Layout_3 from '../../assets/Header/Layout_3'
import Layout_4 from '../../assets/Header/Layout_4'
import Flickr_logo from '../../assets/Loading/Flickr_logo.gif'
import style from '../../assets/Loading/style.css'
const CreateCv = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className='about'>
      {
        loading ? (
          <>
            <img src={Flickr_logo} alt="" className='loading' />
            <h4 className='text-center h4-loading'>please wait</h4>
          </>
        ) : <>
          <div className='header-about'>
            <h2>Createcv</h2>
          </div >
          <Header_midum />
          <div>
            <Layout_3 />
          </div>
          <div>
            <Layout_4 />
          </div>
          <div>
            <Foooter />
          </div>
        </>
      }
    </div >
  )
}

export default CreateCv