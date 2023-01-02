import React from 'react'
import heading_border_left from '../images/heading_border_left.png'
import heading_border_right from '../images/heading_border_right.png'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import i_1 from '../images/i_1.jpg'
import i_2 from '../images/i_2.jpg'
import i_3 from '../images/i_3.jpg'
import i_4 from '../images/i_4.jpg'



const Layout_2 = () => {

    return (
        <div className='section-layout-2'>
            <div className='heading text-center'>
                <h2 className='h2'><span className="theme_color">CHOOSE A</span> PROFESSIONAL DESIGN</h2>
            </div>
            <div className=''>
                <p className='heading_main-p '>Resume</p>
                <img src={heading_border_left} alt="" className='heading_border_left ' />
                <img src={heading_border_right} alt="" className='heading_border_right' />
            </div>
            <div className='slider'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={img1}
                          
                            alt="First slide"
                            id='slider-img'
                        />
                        <Carousel.Caption>
                            {/* <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={img2}
                            alt="Second slide"
                            id='slider-img'
                        />
                        <Carousel.Caption>
                            {/* <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={img3}
                            alt="Third slide"
                            id='slider-img'
                        />
                        <Carousel.Caption>
                            {/* <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={img4}
                            alt="Third slide"
                            id='slider-img'
                        />
                        <Carousel.Caption>
                            {/* <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={img4}
                            alt="Third slide"
                            id='slider-img'
                        />
                        <Carousel.Caption>
                            {/* <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={img4}
                            alt="Third slide"
                            id='slider-img'
                        />
                        <Carousel.Caption>
                            {/* <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <p className='w-90 text-center cara-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their</p>
                {/* <button type="" className='hvr-radial-out text-center'>read more</button> */}
            </div>
        </div>
    )
}

export default Layout_2 