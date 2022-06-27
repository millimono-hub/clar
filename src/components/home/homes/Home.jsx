import React from "react"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
            <div className='img'>
              <img src='./assets/home.png' alt='' />
            </div>
          </div>
          <div className='right topMarign'>
            <h1>
              I AM A <br />
              WEB DESIGNER
            </h1>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
              <i className='fab fa-pinterest pinterest'></i>
              <i className='fab fa-dribbble dribbble'></i>
            </div>
            <p>I'm a Frontend Developer  with an experience in managing and growing developer communities around the world</p>
            <button className='primary-btn'>Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
