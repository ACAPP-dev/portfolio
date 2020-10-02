import React from 'react'
import {Link} from 'react-router-dom'

const Cards = props => {
    console.log(props.blog)
    return(
        <div className='card-div'>
            <a href={props.blog.link}><h4>{props.blog.name}</h4></a>
            <div className='card about-p'>{props.blog.description}</div>
            {/* <img className='card-img' src={require(`${props.blog.picture}`)} alt='Project Screenshot' /> */}
            {/* <a className='card' href={props.project.video} target='_blank' rel="noopener noreferrer">Video Walkthrough</a> */}
            {/* <a className='card' href={props.project.github} target='_blank' rel="noopener noreferrer">Github Link</a> */}
        </div>
    )
}

export default Cards