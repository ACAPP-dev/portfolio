import React from 'react'
import Flatiron1 from '../components/blog/Flatiron1'
import blog1 from '../images/blog-looping-in-javascript.pdf'

export default class BlogContainer extends React.Component {

    render() {
        return(
            
            <div className='about-container'>
                <h4>Blog Posts</h4>
                <div className='resume-container'>
                <iframe id='resume' src={blog1} title="Latest Blog Post" />
                </div>
                < Flatiron1 />
            </div>
            
        )
    }
}