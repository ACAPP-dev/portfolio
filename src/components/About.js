import React from 'react'
import andrewNapa from '../images/andrew-napa.jpg'
import {Link} from 'react-router-dom'
import Cards from '../components/projects/Cards'
import projectListing from '../components/projects/projectListing.json'

const About = () => {
    
    const ProjectCard = () => {
        
        const project = projectListing[0]
        return < Cards key={project.id} project={project} />
    }

    return (
        <div className='about-container'>
            <h2>Andrew Capp</h2>
            <img id='about-img' src={andrewNapa} alt='Andrew in Napa Valley' />
            <h4>Software Engineer Focused on JavaScript, React, and Ruby on Rails</h4>
            <div id='about-div'>
                <h4>About Me</h4>
                <p className='about-p'>I transitioned into programming after a thirty year career as director of finance at Hilton Hotels.  I’m finishing my web design program at Flatiron School and am excited to use my skills in Ruby on Rails and JavaScript to create useful tools.  I’m currently working on a project to view stock market data over customizable time frames.  I really enjoy the challenge of creating something useful and would love opportunities to utilize my coding skills and experience working as part of a team.  If you would like to reach out to me for opportunities my email address is: acapp909@gmail.com</p>
                <Link id='resume-link' to='/resume' exact>Resume</Link>
            </div>
            <div>
                <h4>Latest Project</h4>
                < ProjectCard />
            </div>
        </div>
    )
}

export default About