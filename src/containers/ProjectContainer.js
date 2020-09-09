import React from 'react'
import Cards from '../components/projects/Cards'
import projectListing from '../components/projects/projectListing.json'

export default class ProjectContainer extends React.Component {

    state = {

    }

    generateCards = () => {
        return projectListing.map(project => {
           return < Cards key={project.id} project={project} /> 

        })
    }

    render() {
        return(
            <div className='project-container'>
                <h2>Project Listing</h2>
                {this.generateCards()}


            </div>
            
        )
    }
}