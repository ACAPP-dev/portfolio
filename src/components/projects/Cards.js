import React from 'react'
import {Link} from 'react-router-dom'

const Cards = props => {
    console.log(props.project)
    return(
        <div className='card-div'>
            <Link to={props.project.directory} exact='true'><h4>{props.project.name}</h4></Link>
            <div className='card-justify about-p'>{props.project.description}</div>
            <img className='card-img' src={require(`${props.project.picture}`)} alt='Project Screenshot' />
            <a className='card' href={props.project.video} target='_blank' rel="noopener noreferrer">Video Walkthrough</a>
            <a className='card' href={props.project.github} target='_blank' rel="noopener noreferrer">Github Link</a>
        </div>
    )
}

export default Cards