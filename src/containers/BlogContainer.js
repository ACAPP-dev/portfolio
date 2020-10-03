import React, { Fragment } from 'react'
import blogListing from '../components/blog/blogListing.json'
import Cards from '../components/blog/Cards'
import Flatiron1 from '../components/blog/Flatiron1'

import blog1 from '../images/blog-looping-in-javascript.pdf'

export default class BlogContainer extends React.Component {
    
    state = {
        blogLink: ""
    }

    handleBlog = link => {
        console.log(link)
        this.setState({blogLink: link})
    }

    generateCards = () => {
        return blogListing.map(blog => {
            return < Cards key={blog.index} returnBlog={this.handleBlog} blog={blog} / >
        })
    }
    
    render() {

        

        return(
            <Fragment>
            
            <div className='blog-container'>
                
                <div id='sidebar-div'>
                    <h2>Click on Card to View Blog Post</h2>
                    {this.generateCards()}
                </div>
                <div id='blog-div'>
                    
                        
                        <iframe id='blog-iframe' src={this.state.blogLink} title="Blog Post Display" />
                    
                    {/* < Flatiron1 /> */}
                </div>
            </div>
            </Fragment>
        )
    }
}