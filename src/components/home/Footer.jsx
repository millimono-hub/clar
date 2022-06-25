import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./assets/logo1.png' alt='' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className='box'>
            <h2>Recent Post</h2>
            <div className='text'>
              <p>Boost Sales</p>
              <span> 22.06.2022</span>
            </div>
            <div className='text'>
              <p>Sales</p>
              <span> 22.06.2022</span>
            </div>
            <div className='text'>
              <p>Boost Sales</p>
              <span> 22.06.2022</span>
            </div>
          </div>

          <div className='box'>
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>Moscow</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Phone:+79 014799584</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email:support@clara.com</label>
            </div>
          </div>
        </div>
        <div className='legal container'>
          <p>Copyright @2022. All rights reserved.</p>
          <label>
            Design & Developed by <span>clarisse</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
