import React from 'react'
import ReactMarkdown from 'react-markdown'
import readmeText from './README.md'

const input = '# This is a header\n\nAnd this is a paragraph'

class Stocks extends React.Component {

    state = {
        readme: ''
    }

    componentDidMount() {
        fetch(readmeText)
        .then(resp => resp.text())
        .then(text => {
            console.log(text)
            this.setState({readme: text})
        })

    }

    render() {
        return(
            <div className='project-container'>
                <h2>Stock Market Data Web App</h2>
                <h4>August 2020</h4>
                
                    <ReactMarkdown escapeHtml={false} source={this.state.readme} />
                
            </div>
        )
    }
}

export default Stocks