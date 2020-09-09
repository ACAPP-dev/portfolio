import React from 'react'
import ReactMarkdown from 'react-markdown'
import readmeText from './README.md'

class Familytree extends React.Component {

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
                <h2>Familytree Web App</h2>
                <h4>February 2020</h4>
                
                    <ReactMarkdown escapeHtml={false} source={this.state.readme} />
                
            </div>
        )
    }
}

export default Familytree