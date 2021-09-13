import React from 'react';

const ProjectCard = ({ id, title, category, technologies, completion, description, image }) => {
    return (
        <React.Fragment>
            <section>
                <img key={id} src={image} alt={title} />
                <h2>{title}</h2>
                <p>{category}</p>
                <p>{completion}</p>
                <div className="underline"></div>
                <ul>
                    {technologies.map((technology) => {
                        return <li>{technology}</li>
                    })}
                </ul>
                <p>{description}</p>
            </section>
        </React.Fragment>
    )
}

export default ProjectCard;