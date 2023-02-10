import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import newsletter from '../Assest/images/newsletter.png'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">           <div className='footer-top-data  d-flex gap-30 align-items-center'>             <img src={newsletter} alt="newsletter" />             <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>           </div>         </div>         <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>       </div>     </div>    </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact us</h4>
              <div>
                <address className='text-white fs-6'>Blue Area <br />Islamabad<br />Pakistan</address>
                <Link to={'tel: +92 3456789878'} className='text-white mt-3 mb-1 d-block'> +92 3456789878</Link>
                <Link to={'tomail: abc@gmail.com'} className='text-white mt-2 mb-0 d-block'> abc@gmail.com</Link>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <Link to={""}>
                    <BsLinkedin className='text-white fs-4' />
                  </Link>
                  <Link to={""}>
                    <BsGithub className='text-white fs-4' />
                  </Link>
                  <Link to={""}>
                    <BsInstagram className='text-white fs-4' />
                  </Link>
                  <Link to={""}>
                    <BsYoutube className='text-white fs-4' />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to="terms-and-conditions" className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link to="/blogs" className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to={""} className='text-white py-2 mb-1'>Search</Link>
                <Link to="/about" className='text-white py-2 mb-1'>About Us</Link>
                <Link to={""} className='text-white py-2 mb-1'>FAQ</Link>
                <Link to="/contact" className='text-white py-2 mb-1'>Contact</Link>
                <Link to={""} className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to="/store" className='text-white py-2 mb-1'>Accessories</Link>
                <Link to="/store" className='text-white py-2 mb-1'>Laptops</Link>
                <Link to="/store" className='text-white py-2 mb-1'>HeadPhones</Link>
                <Link to="/store" className='text-white py-2 mb-1'>Tablets</Link>
                <Link to="/store" className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"><p className='text-center mb-0 text-white '>&Copy; {new Date().getFullYear()}  Powered by Sami Developer</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer