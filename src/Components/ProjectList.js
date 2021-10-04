import React from 'react';
import { useGlobalContext } from '../context';
import projects from '../Data/projects';
import ProjectCard from './ProjectCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import ProjectDetails from './ProjectDetails';


const ProjectList = () => {

    const { seeProjectDetails, display_project_id } = useGlobalContext();
    return (
        <React.Fragment>
            <div className={seeProjectDetails ? `project-list-details-show` : `project-list`}>
                <div className="name-title">
                    <div className="name-title-left">
                        <h1>Projects</h1>
                    </div>
                    <div className="name-title-right">
                        <Link to='/' className="home-button-link">Back Home</Link>
                    </div>
                </div>
                <div className="space"></div>
                <div className="underline"></div>
                <div>
                    {
                        projects.map((project, index) => {
                            return (
                                < ProjectCard key={index} {...project} />
                            );
                        })
                    }
                </div>
            </div>
            {
                projects.map((project, index) => {
                    if (seeProjectDetails === true && index + 1 === display_project_id) {
                        return (
                            <div className="card-details">
                                <ProjectDetails key={index} {...project} />
                            </div>
                        )
                    }
                })

            }
        </React.Fragment>
    )
}

export default ProjectList;