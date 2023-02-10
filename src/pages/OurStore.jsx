import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component"
import Meta from '../components/Meta'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Colors from '../components/Colors'
import Container from '../components/Container'


const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Shop By Categories
                </h3>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Filter By
                </h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value={""} id="" />
                      <label className='form-check-label' htmlFor="">In Stock {1}</label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value={""} id="" />
                      <label className='form-check-label' htmlFor="">Out of Stock {0}</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Colors />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value={""} id="color-1" />
                      <label className='form-check-label' htmlFor="color-1">S {2}</label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value={""} id="color-2" />
                      <label className='form-check-label' htmlFor="color-2">M {2}</label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value={""} id="color-3" />
                      <label className='form-check-label' htmlFor="color-3">L {2}</label>
                    </div>
                  </div>

                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Product Tag
                </h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">HeadPhones</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Vivo</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Apple</span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Random Product
                </h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className="w50">
                      <h5>Kids Watch Multi Color</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$ 300</p>
                    </div>
                  </div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/images/watch.jpg" className='img-fluid' alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Kids Watch Multi Color</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$ 300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                    <select name="" className='form-control from-select' id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" select="selected">Best Selling</option>
                      <option value="title-ascending">Alphabatically A-Z</option>
                      <option value="title-decending">Alphabatically Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-decending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-decending">Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className="total-products mb-0">21-products</p>
                    <div className='d-flex align-items-center gap-10 grid'>
                      <img src="images/images/gr4.svg" onClick={() => setGrid(3)} className='d-block img-fluid' alt="sorted pics" />
                      <img src="images/images/gr3.svg" onClick={() => setGrid(4)} className='d-block img-fluid' alt="sorted pics" />
                      <img src="images/images/gr2.svg" onClick={() => setGrid(6)} className='d-block img-fluid' alt="sorted pics" />

                      <img src="images/images/gr.svg" onClick={() => setGrid(12)} className='d-block img-fluid' alt="sorted pics" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default OurStore