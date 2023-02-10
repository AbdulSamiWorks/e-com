import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import Container from '../components/Container';

const SingleProduct = () => {
  const props = { width: 400, height: 500, zoomWidth: 500, img: "https://static-01.daraz.pk/p/165ddfd161ba46358339676842144a15.jpg" };

  const { orderProduct, setOrderProduct } = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div><ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src="https://ae01.alicdn.com/kf/S019aa96256cb4d0793f11bb6bc4882f9r/2022-Top-Brand-Luxury-Wrist-Watches-for-Men-Fashion-Casual-Military-Sports-Full-Steel-Waterproof-Men.jpg" className='img-fluid' alt="watch" />
                </div>
                <div>
                  <img src="https://ae01.alicdn.com/kf/S019aa96256cb4d0793f11bb6bc4882f9r/2022-Top-Brand-Luxury-Wrist-Watches-for-Men-Fashion-Casual-Military-Sports-Full-Steel-Waterproof-Men.jpg" className='img-fluid' alt="watch" />
                </div>
                <div>
                  <img src="https://ae01.alicdn.com/kf/S019aa96256cb4d0793f11bb6bc4882f9r/2022-Top-Brand-Luxury-Wrist-Watches-for-Men-Fashion-Casual-Military-Sports-Full-Steel-Waterproof-Men.jpg" className='img-fluid' alt="watch" />
                </div>
                <div>
                  <img src="https://ae01.alicdn.com/kf/S019aa96256cb4d0793f11bb6bc4882f9r/2022-Top-Brand-Luxury-Wrist-Watches-for-Men-Fashion-Casual-Military-Sports-Full-Steel-Waterproof-Men.jpg" className='img-fluid' alt="watch" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className='boder-bottom'>
                  <h3 className='title'>Havels Watch</h3>
                </div>
                <div className="boder-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0 t-review'>( 2 reviews )</p>
                  </div>
                  <a className='review-btn' href="#review">Write a Review</a>
                </div>
                <div className=" py-3">
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type : </h3><p className='product-data'>Accessories</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand : </h3><p className='product-data'>Havels</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category : </h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tag : </h3><p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availability : </h3><p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size : </h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className="size badge border boder-1 bg-white text-dark border-secondary">S</span>
                      <span className="badge border boder-1 bg-white text-dark border-secondary">M</span>
                      <span className="badge border boder-1 bg-white text-dark border-secondary">L</span>
                      <span className="badge border boder-1 bg-white text-dark border-secondary">XL</span>
                      <span className="badge border boder-1 bg-white text-dark border-secondary">XXL</span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column  mt-2 mb-3'>
                    <h3 className='product-heading'>Color : </h3>
                    <Colors />
                  </div>
                  <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity : </h3>
                    <div>
                      <input type="number" name="" min={1} max={100} className="form-control" style={{ width: '70px' }} id="" />
                    </div>
                    <div className='d-flex align-items-center gap-15 ms-5'>
                      <button className='button border-0' type='submit'>Add to Cart</button>
                      <button className='button signup'>Buy it Now</button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <Link to="/wishlist"><AiOutlineHeart className='fs-5 me-2' />Add to Wishlist</Link>
                    </div>
                    <div>
                      <Link to="/compareProduct"><TbGitCompare className='fs-5 me-2' />Add to Compare</Link>
                    </div>
                  </div>
                  <div className='accordian my-3'>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Shipping & Return
                          </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam hic consequuntur repudiandae sapiente. Distinctio, soluta reiciendis tempore iste hic provident dolore illum repudiandae totam rem eligendi cumque iure eius quod? </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Materials
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Care Instruction
                          </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                    </div></div>
                </div>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="discription-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className='bg-white p-3'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, in debitis beatae asperiores sequi repellendus doloremque laboriosam repudiandae eius culpa ratione labore nulla architecto voluptatibus officia aliquam magni recusandae dolor.
                </p>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 id='review'>Reviews</h3>
              <div className="review-head className='d-flex align-items-end justify-content-between">
                <div>
                  <h4 className='mb-2'>Customer Review</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 2 reviews</p>
                  </div>
                </div>
                {orderProduct && (
                  <div>
                    <Link className='text-dark text-decoration-unde' to="">Write a Review</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="review-form py-4">
              <h4>Write a Review</h4>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </div>
                <div>
                  <textarea name="comments" id="" className='w-100 form-control' placeholder='Comments' cols="30" rows="4"></textarea>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className="button border-0">Submit Review</button>
                </div>
              </form>
            </div>
            <div className="reviews mt-4">
              <div className="review">
                <div className="d-flex gap-15 align-items-center">
                  <h6 className='mb-0'>Sami</h6>
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700" />
                </div>
                <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil cupiditate assumenda nesciunt dignissimos ullam, autem obcaecati necessitatibus maiores recusandae culpa architecto consequuntur, eius officiis sed officia tempora nostrum inventore voluptatibus?</p>
              </div>
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
          </div>
      </Container>
    </>
  )
}

export default SingleProduct