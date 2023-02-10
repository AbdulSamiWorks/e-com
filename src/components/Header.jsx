import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import compare from '../Assest/images/compare.svg'
import wishlist from '../Assest/images/wishlist.svg'
import user from '../Assest/images/user.svg'
import cart from '../Assest/images/cart.svg'
import menu from '../Assest/images/menu.svg'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>Hotline: <Link className='text-white' to={"tel : +923456789954"}>+92 345678954</Link></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-center">
            <div className="col-2">
              <h3>
                <Link to={'/'} className='text-white'>ShopEase</Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link to={"/compareProduct"} className='d-flex align-items-center text-white gap-10'>
                    <img src={compare} alt="Compare" />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to={'/wishlist'} className='d-flex align-items-center text-white gap-10'>
                    <img src={wishlist} alt="Wishlist" />
                    <p className='mb-0'>Favourite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to={'/login'} className='d-flex align-items-center text-white gap-10'>
                    <img src={user} alt="LognIn" />
                    <p className='mb-0'>Logn In<br />MyAccount</p>
                  </Link>
                </div>
                <div>
                  <Link to={'/cart'} className='d-flex align-items-center text-white gap-10'>
                    <img src={cart} alt="Cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={menu} alt="menu" />
                      <span className='me-5 d-inline-block'> Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header