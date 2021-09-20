import React from 'react';
import { useGlobalContext } from '../context';
import projects from '../Data/projects';
import ProjectCard from './ProjectCard';

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
        </React.Fragment>
    )
}

export default ProjectList;