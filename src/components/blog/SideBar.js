import React from 'react'
import blogListing from './blogListing.json'
import Cards from './Cards'

const SideBar = () => {

    const generateCards = () => {
        return blogListing.map(blog => {
            return blog.name
        })
    }

    return (
        <div>
            <h2>SideBar Component</h2>
            {generateCards()}
        </div>
    )
}

export default SideBar