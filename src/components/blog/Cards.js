import React from 'react'

const Cards = props => {
    // console.log(props)
    
    // const handleClick = () => {
    //     return props.returnBlog ? props.returnBlog(props.blog.link) : null
    // }

    return(
        <a className='blog-page-link' href={props.blog.link} target='_blank' rel="noopener noreferrer" >
        <div className='card-div'>
            <h4>{props.blog.name}</h4>
            <div className='card-justify about-p'>{props.blog.description}</div>
            <div className='card'>Published: {props.blog.date}</div>
            {/* <img className='card-img' src={require(`${props.blog.picture}`)} alt='Project Screenshot' /> */}
            {/* <a className='card' href={props.project.video} target='_blank' rel="noopener noreferrer">Video Walkthrough</a> */}
            {/* <a className='card' href={props.project.github} target='_blank' rel="noopener noreferrer">Github Link</a> */}
        </div>
        </a>
    )
}

export default Cards