import React from 'react'

class Resume extends React.Component {
    state = {
        resume: {},
        scrollHeight: null
    }

    componentDidMount() {
        // debugger
        this.setState({scrollHeight: document.body.scrollHeight + 'px'})
        console.log(this.state.scrollHeight)
    }

    render() {
        return (
            <div  id='resume-container'>
                <iframe style={{height: this.state.scrollHeight}} id='resume' src="https://docs.google.com/document/d/e/2PACX-1vRB401VDhGXJi8GIg2TaMYZll0RLjJ8lJZbkUIveG4sAxEgakPARz44A11rjhq-R-7K5dr9X_ytqcZU/pub?embedded=true" title="Andrew's Resume" />
            </div>
        )
    }
}

export default Resume