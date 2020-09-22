import React from 'react'
import resume from '../images/Resume.pdf'

class Resume extends React.Component {
    state = {
        resume: {},
    }

    render() {
        return (
            <div  className='resume-container'>
                
                <iframe id='resume' src={resume} title="Andrew's Resume" />
            </div>
        )
    }
}

export default Resume