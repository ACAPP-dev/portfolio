import React from 'react'

export default class NavBarContainer extends React.Component {


    render() {

        return (
            <div id='navbar-div'>
                <span className='navbar-span'>Home</span>
                <span className='navbar-span'>About</span>
                <span className='navbar-span'>Resume</span>
                <span className='navbar-span'>Projects</span>
                <span className='navbar-span'>Blog</span>
                <span className='navbar-span'>Andrew Capp - Web Developer</span>
            </div>
        )
    }
}