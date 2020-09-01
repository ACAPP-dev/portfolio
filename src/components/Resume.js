import React from 'react'

class Resume extends React.Component {
    state = {
        resume: {}
    }

    

    render() {
        return (
            <div id='resume-container'>
                
                <iframe id='resume' src="https://docs.google.com/document/d/e/2PACX-1vRB401VDhGXJi8GIg2TaMYZll0RLjJ8lJZbkUIveG4sAxEgakPARz44A11rjhq-R-7K5dr9X_ytqcZU/pub?embedded=true" title="Andrew's Resume" />
            </div>
        )
    }
}

export default Resume