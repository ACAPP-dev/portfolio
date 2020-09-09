import React from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBarContainer extends React.Component {


    render() {

        return (
            <div id='navbar-div'>

                <span className='navbar-name'>Andrew Capp - Web Developer</span>
                <NavLink className='navbar' activeClassName='navbar-active' to='/' exact>About</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/resume' exact>Resume</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/projects' exact>Projects</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/blog' exact>Blog</NavLink>
                
                
            </div>
        )
    }
}