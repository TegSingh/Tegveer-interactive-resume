import React from 'react';

const ProjectCard = ({ id, title, category, technologies, completion, description, image }) => {
    return (
        <React.Fragment>
            <section className="card">
                <h2 className="card-title">{title}</h2>
                <div>
                    <img key={id} src={image} alt={title} className="card-image" />
                </div>
                <div className="container-card">
                    <div className="container-left">
                        <p>Category: {category}</p>
                        <p>Completion: {completion}</p>
                        <ul>
                            {technologies.map((technology) => {
                                return <li>{technology}</li>
                            })}
                        </ul>
                    </div>
                    <div className="container-right">
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProjectCard;