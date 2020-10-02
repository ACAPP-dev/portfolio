import React from 'react'
import blogListing from './blogListing.json'
import Cards from './Cards'

const SideBar = () => {

    const generateCards = () => {
        return blogListing.map(blog => {
            return < Cards key={blog.index} blog={blog} / >
        })
    }

    return (
        <div>
            <h2>Blog Posts</h2>
            {generateCards()}
        </div>
    )
}

export default SideBar