import React from 'react';
import { ImCross } from 'react-icons/im';
import { useGlobalContext } from '../context';

const ProjectDetails = ({ id, title, category, technologies, completion, description, image, source }) => {

    const { closeProjectDetails } = useGlobalContext();
    console.log("ID: ", id, "Category: ", category, "Tech: ", technologies, "Completion: ", completion, "Desccription: ", description);

    return (
        <React.Fragment>
            <div>
                <button className="close-button" onClick={() => closeProjectDetails()}>
                    <ImCross style={{ "height": "50px" }} />
                </button>
                <p>Category: {category}</p>
                <p>Completion: {completion}</p>
                {
                    source && <p>
                        Can be accessed at:<a href={source} className="no-decoration-link" target="_blank"> source</a>
                    </p>
                }
                {
                    technologies.map((technology) => {
                        return <p className="project-skill">{technology}</p>
                    })
                }
            </div>
            <div className="space-new"></div>
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