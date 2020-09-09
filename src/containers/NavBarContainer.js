import React from 'react'
import { NavLink } from 'react-router-dom'
import name from '../images/A.png'

export default class NavBarContainer extends React.Component {


    render() {

        return (
            <div id='navbar-div'>

                <div className='navbar-name'>
                    <img className='icon' src={name} alt='icon' />
                    <span className='navbar-span'> Andrew Capp - Web Developer</span>
                </div>
                <NavLink className='navbar' activeClassName='navbar-active' to='/' exact>About</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/resume' exact>Resume</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/projects' exact>Projects</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/blog' exact>Blog</NavLink>
                
                
            </div>
        )
    }
}