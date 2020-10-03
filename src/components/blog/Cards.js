import React from 'react'
import {Link} from 'react-router-dom'

const Cards = props => {
    // console.log(props)
    
    const handleClick = () => {
        return props.returnClick(props.blog.link)
    }

    return(
        <div onClick={handleClick} className='card-div'>
            <h4>{props.blog.name}</h4>
            <div className='card'>{props.blog.description}</div>
            {/* <img className='card-img' src={require(`${props.blog.picture}`)} alt='Project Screenshot' /> */}
            {/* <a className='card' href={props.project.video} target='_blank' rel="noopener noreferrer">Video Walkthrough</a> */}
            {/* <a className='card' href={props.project.github} target='_blank' rel="noopener noreferrer">Github Link</a> */}
        </div>
    )
}

export default Cards