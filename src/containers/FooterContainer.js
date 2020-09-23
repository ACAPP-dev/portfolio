import React from 'react'
import Github from '../images/GitHub-Mark-120px-plus.png'
import Linkedin from '../images/LI-Logo.png'
import Email from '../images/Email-Icon.png'

export default class FooterContainer extends React.Component {

    render() {

        return(
            <div id='footer-div'>
                
                <a href='https://github.com/ACAPP-dev' className='footer' target='_blank' rel="noopener noreferrer">
                    <img className='footer-img' src={Github} alt='Github'/>
                </a>
                <a href='https://www.linkedin.com/in/acapp-web-dev' className='footer' target='_blank' rel="noopener noreferrer">
                    <img className='footer-img' src={Linkedin} alt='Linkedin'/>
                </a>
                
            
                

                <span className='footer'>Last Updated: September 2020</span>
            </div>
        )
    }
}