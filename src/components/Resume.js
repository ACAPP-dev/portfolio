import React from 'react'
import resume from '../images/Resume.pdf'

class Resume extends React.Component {
    state = {
        resume: {},
    }

    render() {
        return (
            <div  id='resume-container'>
                
                <iframe id='resume' src="https://docs.google.com/document/d/1mfcw6s5-7Ryo6LGkTIqe1ezCrf4Ym43g-WIj0KhzVxc/pub?embedded=true" title="Andrew's Resume" />
            </div>
        )
    }
}

export default Resume