import React from 'react'
import ReactMarkdown from 'react-markdown'
import {readme} from './README.md'

const Stocks = () => {

    return(
        <div className='project-container'>
            <h2>Stock Market Data Web App</h2>
            <h4>August 2020</h4>
            <div id='container'>
                <ReactMarkdown source={readme} />
            </div>
        </div>
    )
}

export default Stocks