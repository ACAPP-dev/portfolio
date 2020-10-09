import React from 'react'
import Github from '../images/GitHub-Mark-120px-plus.png'
import Linkedin from '../images/LI-Logo.png'

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
                {/* <!-- GreenGeeks Seal Code --> */}
                    <a href='https://greengeeks.com' className='footer' target='_blank' rel="noopener noreferrer">
                        <img className='footer-img' src="https://static.websitehostserver.net/ggseal/Green_3.png" alt="Greengeeks Seal" />
                    </a>
                {/* <!-- End GreenGeeks Seal Code --></div> */}
            
                

                <span className='footer'>Last Updated: October 2020</span>
            </div>
        )
    }
}