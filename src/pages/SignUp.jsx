import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'

const SignUp = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>SignUp</h3>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <CustomInputs type="text" name='name' placeholder='Name' />
                                    <CustomInputs type="tel" name='mobile' placeholder='Mobile No' />
                                    <CustomInputs type="email" name='email' placeholder='Email' />
                                    <CustomInputs type="passward" name='passward' placeholder='Passward'  />
                                    <div>
                                        <div className=" mt-3 d-flex align-items-center flex-column justify-content-center gap-15">
                                            <button className='button border-0'>SignUp</button>
                                            <Link to="/login">Cancel</Link>
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

export default SignUp