import React from 'react'
import blogListing from './blogListing.json'
import Cards from './Cards'

const SideBar = (props) => {
    // console.log(props)

    const handleClick = link => {
        return props.returnBlog(link)
    }

    const generateCards = () => {
        return blogListing.map(blog => {
            return < Cards key={blog.index} returnClick={handleClick} blog={blog} / >
        })
    }

    return (
        <div class='sidebar-div'>
            <h2>Click on Card to View Blog Post</h2>
            {generateCards()}
        </div>
    )
}

export default SideBar