import React, { useState, useEffect } from 'react'
import Hourglass from '../../assets/Loading/Hourglass.gif'

const Contect = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
   
  }, []);

  const handlesubmit = (event)=>{
    event.preventDefault()
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }
  return (
    <>
      {<div div className='container' >
        <div className='row'>
          {
          loading ? (
            <div className="loader-container">

              {/* <img src={doted} alt="Loading" /> */}
              <h1>Loading.............</h1>
            </div>

          ) :
            <div>
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          }
        </div>
      </div >
      }
    </>
  )
}

export default Contect  