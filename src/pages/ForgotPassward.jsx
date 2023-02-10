import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'


const ForgotPassward = () => {
    return (
        <>
            <Meta title={"Forgot Passward"} />
            <BreadCrumb title="Forgot Passward" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Your Passward</h3>
                                <p className='text-center mt-2 mb-3'>We will send you an email to reset your passward</p>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <CustomInputs type="email" name='email' placeholder='Email' />
                                    <div>
                                        <div className=" mt-3 d-flex flex-column align-items-center justify-content-center gap-15">
                                            <button className='button border-0'>Submit</button>
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

export default ForgotPassward