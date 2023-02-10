import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import Meta from '../components/Meta'

const WishList = () => {
    return (
        <>
            <Meta title={"Wishlist Products"} />
            <BreadCrumb title="Wishlist Products" />
            <Container class1="wishlist-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className='title'>Apple Smart Watch Series 7</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className='title'>Apple Smart Watch Series 7</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image">
                                    <img src="images/images/watch.jpg" className='img-fluid w-100' alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className='title'>Apple Smart Watch Series 7</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>

                    </div>
            </Container>
        </>
    )
}

export default WishList