import React from 'react'
import ReactMarkdown from 'react-markdown'
import readmeText from './README.md'

class Domain extends React.Component {

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
                <h2>Domain Search Using GoDaddy API (Ruby CLI)</h2>
                <h4>December 2019</h4>
                
                    <ReactMarkdown escapeHtml={false} source={this.state.readme} />
                
            </div>
        )
    }
}

export default Domain