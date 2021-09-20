import React from 'react';

const WorkexCard = ({ id, title, organization, start, end, highlights, description, logo }) => {
    return (
        <React.Fragment>
            <section key={id} className="workex-tile">
                <div className="workex-tile-left">
                    <img src={logo} alt={title} id="workex-image" />
                </div>
                <div className="workex-tile-right">
                    <div id="workex-header">
                        <h2 id="workex-title">{title}</h2>
                        <p id="workex-organization">{organization}</p>
                        <p id="workex-duration">{`${start} - ${end}`}</p>
                    </div>
                    <div id="workex-skill-list">
                        <ul>
                            {highlights.map((item) => {
                                return <li id="workex-skill">{item}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            {description.map((item) => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default WorkexCard;