import React from 'react'
import {Link} from 'react-router-dom'

const Cards = props => {
    console.log(props.project)

    return(
        <div className='card-div'>
            <Link to={props.project.directory} exact='true'><h4>{props.project.name}</h4></Link>
            <img className='card-img' src={props.project.picture} />
            <a className='card' href={props.project.video}>Video Walkthrough</a>
            <a className='card' href={props.project.github}>Github Link</a>
        </div>
    )
}

export default Cards