import React from 'react'
import Github from '../images/GitHub-Mark-120px-plus.png'
import Linkedin from '../images/LI-Logo.png'
import Email from '../images/Email-Icon.png'

export default class FooterContainer extends React.Component {

    render() {

        return(
            <div id='footer-div'>
                
                <a href='https://github.com/ACAPP-dev' className='footer'>
                    <img className='footer-img' src={Github} alt='Github'/>
                </a>
                <a href='https://www.linkedin.com/in/acapp-web-dev' className='footer'>
                    <img className='footer-img' src={Linkedin} alt='Linkedin'/>
                </a>
                <a href='mailto: acapp909@gmail.com' className='footer'>
                    <img className='footer-img' src={Email} alt="Email" />
                </a>
            
                <span className='footer'>Contact Info</span>

                <span className='footer'>Navigation Links</span>
            </div>
        )
    }
}