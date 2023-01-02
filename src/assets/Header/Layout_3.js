import React from 'react'
import resume_img from '../images/resume_img.png'
const Layout_3 = () => {
    return (
        <div>
            <section className='layout-section'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-2'>
                            <img src={resume_img} alt="" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 white-fonts heading-details-2'>
                            <h2 className='small_heading '>EVERYTHING YOU NEED IN ONE SOLUTION</h2>
                            <p className=''>HELP YOUR NEXT CAREER MOVE MORE SMOOTHER AND MORE EFFICIENT
                                ss normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in theirss normal distribution of letters, as opposed to using 'Content here, content here', making it look like...</p>
                            {/* <button type="submit" className='hvr-radial-out'>read more</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Layout_3