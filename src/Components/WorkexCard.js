import React from 'react';

const WorkexCard = ({ id, title, organization, start, end, highlights, description, logo }) => {
    return (
        <React.Fragment>
            <section>
                <img key={id} src={logo} alt={title} />
                <h2>{title}</h2>
                <p>{organization}</p>
                <p>{`${start} - ${end}`}</p>
                <div className="underline"></div>
                <ul>
                    {highlights.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
                <ul>
                    {description.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
            </section>
        </React.Fragment>
    )
}

export default WorkexCard;