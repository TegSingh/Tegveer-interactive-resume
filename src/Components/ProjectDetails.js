import React from 'react';

const ProjectDetails = ({ id, category, technologies, completion, description }) => {
    console.log(id, category, technologies, completion, description)
    return (
        <React.Fragment>
            <div>
                <p>Category: {category}</p>
                <p>Completion: {completion}</p>
                <ul>
                    {technologies.map((technology) => {
                        return <li>{technology}</li>
                    })}
                </ul>
            </div>
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