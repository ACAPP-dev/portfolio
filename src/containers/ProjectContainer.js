import React from 'react'
import ReactMarkdown from 'react-markdown'
import Stocks from '../components/projects/Stocks'

export default class ProjectContainer extends React.Component {

    render() {
        return(
            <div>
                Use Individual Project components to render project info
                < Stocks />


            </div>
            
        )
    }
}