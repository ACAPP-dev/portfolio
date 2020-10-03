import React, { Fragment } from 'react'
import SideBar from '../components/blog/SideBar'
import Flatiron1 from '../components/blog/Flatiron1'

import blog1 from '../images/blog-looping-in-javascript.pdf'

export default class BlogContainer extends React.Component {
    
    handleBlog = link => {
        return <h2>Returning Link {link}</h2>
    }
    

    render() {

        

        return(
            <Fragment>
            
            <div className='blog-container'>
                
                <div id='sidebar-div'>
                    <SideBar returnBlog={this.handleBlog} />
                </div>
                <div id='blog-div'>
                    <div className='resume-container'>
                        <iframe id='resume' src={blog1} title="Latest Blog Post" />
                    </div>
                    < Flatiron1 />
                </div>
            </div>
            </Fragment>
        )
    }
}