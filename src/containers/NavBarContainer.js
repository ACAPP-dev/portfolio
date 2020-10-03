import React from 'react'
import { NavLink } from 'react-router-dom'
import Email from '../images/Email-Icon.png'

export default class NavBarContainer extends React.Component {


    render() {

        return (
            <div id='navbar-div'>

                <div className='navbar-name'>
                <a href='mailto: acapp909@gmail.com' id='navbar-email-link'>
                    <img className='footer-img' src={Email} alt="Email" />
                    <span id='footer-email'>acapp909@gmail.com</span>
                </a>
                </div>
                <NavLink className='navbar' activeClassName='navbar-active' to='/' exact>About</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/resume' exact>Resume</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/projects' exact>Projects</NavLink>
                <NavLink className='navbar' activeClassName='navbar-active' to='/blog' exact>Blog</NavLink>
                
                
            </div>
        )
    }
}