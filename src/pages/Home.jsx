import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCart from '../components/BlogCart'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { services } from '../Utils/Data'

const Home = () => {
  return (
    <>
    <Meta title={"E-commerce"} />
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p></p>
                  <Link className='button' to={""}>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-01.jpg" className='img-fluid rounded-3' width={300} alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Mac Book Pro</h5>
                    <p></p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-02.jpg" className='img-fluid rounded-3' width={300} alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% Off</h4>
                    <h5>Smart Watch 7</h5>
                    <p></p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-03.jpg" className='img-fluid rounded-3' width={300} alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p></p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/images/catbanner-04.jpg" className='img-fluid rounded-3' width={300} alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
             {
              services?.map((i,j)=>{
                return(
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                )
              })
             }
              </div>
            </div>
          </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Smart Tv</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Music</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Smart Tv</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/tv.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Music</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/headphone.jpg" alt="" />
                </div>
                <div className='d-flex  align-items-center'>
                  <div>
                    <div>Cameras</div>
                    <p>10 Items</p>
                  </div>
                  <img src="images/images/camera.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-6">
              <div className="famous-card position-relative">
                <img src="images/images/famous-1.webp" alt="famous img" />
                <div className="famous-content  img-fluid position-absolute">
                  <h5>Big Screen
                  </h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="famous-card position-relative">
                <img src="images/images/famous-1.webp" alt="famous img" />
                <div className="famous-content img-fluid position-absolute">
                  <h5>Big Screen
                  </h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo</p>
                </div>
              </div>
            </div>
          </div>
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
    </Container>
      
      <Container class1="marque-wrapper py-5">
      <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className='d-flex '>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-01.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-02.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-03.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-04.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-05.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-06.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-07.png" alt="Brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/images/brand-08.png" alt="Brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
          </div>
      </Container>
      <Meta title={"E-commerce"} />
     
    </>
  )
}

export default Home