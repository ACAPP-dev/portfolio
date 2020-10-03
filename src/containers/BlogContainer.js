import React, { Fragment } from 'react'
import SideBar from '../components/blog/SideBar'
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
    

    render() {

        

        return(
            <Fragment>
            
            <div className='blog-container'>
                
                <div id='sidebar-div'>
                    <SideBar returnBlog={this.handleBlog} />
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