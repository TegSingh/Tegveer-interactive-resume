import React from 'react';
import { ImCross } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io'
import { useGlobalContext } from '../context';

const ProjectDetails = ({ id, category, technologies, completion, description, source }) => {

    const { closeProjectDetails } = useGlobalContext();
    console.log(id, category, technologies, completion, description);

    return (
        <React.Fragment>
            <div>
                <button className="close-button" onClick={() => closeProjectDetails()}>
                    <ImCross />
                </button>
                <p>Category: {category}</p>
                <p>Completion: {completion}</p>
                <ul>
                    {technologies.map((technology) => {
                        return <li>{technology}</li>
                    })}
                </ul>
                <p>{source}</p>
            </div>
            <div className="underline"></div>
            <div>
                <ul>
                    {
                        description.map((item) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    );
}

export default ProjectDetails;