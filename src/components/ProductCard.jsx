import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import watch from '../Assest/images/watch.jpg'
import wish from '../Assest/images/wish.svg'
import watch2 from '../Assest/images/watch-1.jpeg'
import compare from '../Assest/images/prodcompare.svg'
import view from '../Assest/images/view.svg'
import cart from '../Assest/images/add-cart.svg'


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == '/product' ? `gr-${grid}` : "col-3"}`}>
                <Link to=":id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishicon" /></button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="Product img" />
                        <img src={watch2} className='img-fluid' alt="Product img" />
                    </div>
                    <div className="product-detail">
                        <h6 className="brand">
                            Havels
                        </h6>
                        <h5 className="product-title">Smart Watch bulk 10 pack multi-colored for Smart People</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={true}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quis temporibus.</p>
                        <p className="price">$100.0</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'>
                                <img src={compare} alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={cart} alt="cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname == '/product' ? `gr-${grid}` : "col-3"}`}>
                <Link to="" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className='border-0 bg-transparent'><img src={wish} alt="wishicon" /></button>
                    </div>
                    <div className="product-image">
                        <img src={watch} className='img-fluid' alt="Product img" />
                        <img src={watch2} className='img-fluid' alt="Product img" />
                    </div>
                    <div className="product-detail">
                        <h6 className="brand">
                            Havels
                        </h6>
                        <h5 className="product-title">Smart Watch bulk 10 pack multi-colored for Smart People</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quis temporibus.</p>
                        <p className="price">$100.0</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className='border-0 bg-transparent'>
                                <img src={compare} alt="compare" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt="view" />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={cart} alt="cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard