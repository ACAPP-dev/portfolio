import React from 'react'
import ReactMarkdown from 'react-markdown'
import readmeText from './README.md'

class Stocks extends React.Component {

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
                <h2>Stock Market Data Web App</h2>
                <h4>August 2020</h4>
                
                    <ReactMarkdown escapeHtml={false} source={this.state.readme} />
                
            </div>
        )
    }
}

export default Stocks