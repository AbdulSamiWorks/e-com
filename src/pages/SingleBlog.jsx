import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blogimg from '../Assest/images/blog-1.jpg'
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic"} />
            <BreadCrumb title="Dynamic" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4' /> Go Back to Blogs</Link>
                                <h3 className="title">A beautiful Sunday Morning Renaissance</h3>
                                <img src={blogimg} className='img-fluid w-100 my-4' alt="single blog" />
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, repellat incidunt voluptate sed accusamus aperiam aut quod totam id doloribus perferendis libero vel beatae minima rerum similique velit dolorem quis.</p>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default SingleBlog