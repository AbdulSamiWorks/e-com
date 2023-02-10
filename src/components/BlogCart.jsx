import React from 'react'
import { Link } from 'react-router-dom'

const BlogCart = () => {
    return (
        <div className="blog-card">
            <div className="card-img">
                <img src="images/images/blog-1.jpg" className='img-fluid w-100' alt="" />
            </div>
            <div className="blog-comtent">
                <p className='date'>1 Jan, 2023</p>
                <h5 className='title'>A Beautiful Sunday Morning</h5>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas dolorem officia sunt animi, velit voluptatibus consectetur similique reprehenderit.</p>
                <Link to="/blog/:id" className='button'>Read More</Link>

            </div>
        </div>
    )
}

export default BlogCart