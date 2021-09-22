import React from 'react';
import { useGlobalContext } from '../context';
import projects from '../Data/projects';
import ProjectCard from './ProjectCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'



const ProjectList = () => {
    return (
        <React.Fragment>
            <div className="project-list">
                {
                    projects.map((project) => {
                        return (
                            < ProjectCard {...project} />
                        );
                    })
                }
                <Link to='/' className="home-button-link">Back Home</Link>
            </div>
        </React.Fragment>
    )
}

export default ProjectList;