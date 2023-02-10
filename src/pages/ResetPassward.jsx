import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInputs from '../components/CustomInputs'

const ResetPassward = () => {
    return (
        <>
            <Meta title={"Reset Passward"} />
            <BreadCrumb title="Reset Passward" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Your Passward</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                                <CustomInputs type="passward" name='passward' placeholder='Passward' />
                                <CustomInputs type="passward" name='confirm-passward' placeholder='Confirm Passward' />
                                <div>
                                    <div className=" mt-3 d-flex align-items-center flex-column justify-content-center gap-15">
                                        <button className='button border-0'>Reset</button>
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

export default ResetPassward