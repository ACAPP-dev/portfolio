import React from 'react'
import andrewPhoto from '../images/andrew-profile.jpeg'
import {Link} from 'react-router-dom'
import Cards from '../components/projects/Cards'
import projectListing from '../components/projects/projectListing.json'
import blog from '../images/blog-looping-in-javascript.pdf'

const About = () => {
    
    const ProjectCard = () => {
        
        const project = projectListing[0]
        return < Cards key={project.id} project={project} />
    }

    return (
        <div className='about-container'>
            <div id='about-div'>
                <h2>Andrew Capp</h2>
                <h4>Software Engineer Focused on JavaScript, React, and Ruby on Rails</h4>
                <img id='about-img' src={andrewPhoto} alt='Andrew Profile Picture' />
                <p className='about-p'>I transitioned into programming after a thirty year career as director of finance at Hilton Hotels and recently graduated from my software engineering program at Flatiron School. I really enjoy the challenge of creating something useful and would love opportunities to utilize my coding skills and experience working as part of a team.  If you would like to reach out to me for opportunities my email address is: acapp909@gmail.com.</p>
                <Link id='resume-link' to='/resume' exact>Resume</Link>
            </div>
            <div>
                <h4>Latest Project</h4>
                < ProjectCard />
            </div>
            <div><h4>Latest Blog</h4></div>
            <div className='resume-container'>
                
                <iframe id='resume' src={blog} title="Latest Blog Post" />
            </div>
        </div>
    )
}

export default About