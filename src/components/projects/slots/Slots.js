import React from 'react'
import ReactMarkdown from 'react-markdown'
import readmeText from './README.md'

class Slots extends React.Component {

    state = {
        readme: ''
    }

    componentDidMount() {
        fetch(readmeText)
        .then(resp => resp.text())
        .then(text => {
            this.setState({readme: text})
        })

    }

    render() {
        return(
            <div className='project-div'>
                <h2>Slot Machine Javascript Based Web App</h2>
                <h4>June 2020</h4>
                
                    <ReactMarkdown escapeHtml={false} source={this.state.readme} />
                
            </div>
        )
    }
}

export default Slots