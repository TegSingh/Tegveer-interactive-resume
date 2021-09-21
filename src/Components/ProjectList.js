import React from 'react';
import { useGlobalContext } from '../context';
import projects from '../Data/projects';
import ProjectCard from './ProjectCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'



const ProjectList = () => {
    return (
        <React.Fragment>
            <div>
                {
                    projects.map((project) => {
                        return (
                            < ProjectCard {...project} />
                        );
                    })
                }
            </div>
            <button className="home-button">
                <Link to='/'>Back Home</Link>
            </button>
        </React.Fragment>
    )
}

export default ProjectList;