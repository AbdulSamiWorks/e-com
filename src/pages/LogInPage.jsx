import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'
import Meta from '../components/Meta'

const LogInPage = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className='text-center mb-3'>Login</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <CustomInputs type="email" name='email' placeholder='Email'/>
                  <CustomInputs type="passward" name='passward' placeholder='Passward'/>
                  <div>
                    <Link to="/forgot-passward">Forgot Passward?</Link>
                    <div className=" mt-3 d-flex align-items-center justify-content-center gap-15">
                      <button className='button border-0' type='submit'>Login</button>
                      <Link to="/signup" className='button signup'>SignUp</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default LogInPage