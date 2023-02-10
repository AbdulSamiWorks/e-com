import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiInfoCircle, BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.805515879891!2d73.06363041468983!3d33.713981042928246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbff2aea8585d%3A0x4de2c07ee75e595a!2sApple%20Eyes!5e0!3m2!1sen!2s!4v1675353768652!5m2!1sen!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="name" className="form-control" placeholder='Name' name='name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' name='email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile No.' name='passward' />
                    </div>
                    <div>
                      <textarea name="comments" id="" className='w-100 form-control' placeholder='Comments' cols="30" rows="4"></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us </h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex align-items-center gap-15'><AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Blue Area Islamabad Pakistan</address></li>
                      <li className='mb-3 d-flex align-items-center gap-15'><BiPhoneCall className='fs-5' />
                        <Link to="tel +923456987678" className='ll'>+92 3456987678</Link></li>
                      <li className='mb-3 d-flex align-items-center gap-15'><AiOutlineMail className='fs-5' />
                        <Link to="abc@gmail.com" className='ll'>abc@gmail</Link></li>
                      <li className='mb-3 d-flex align-items-center gap-15'><BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday - Saturday  10am - 11pm</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact