import React from 'react'
import ReactMarkdown from 'react-markdown'
import readmeText from './README.md'

class AutoDealer extends React.Component {

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
            <div>
                <h2>Auto Dealer Website</h2>
                <h4>April 2020</h4>
                
                    <ReactMarkdown escapeHtml={false} source={this.state.readme} />
                
            </div>
        )
    }
}

export default AutoDealer