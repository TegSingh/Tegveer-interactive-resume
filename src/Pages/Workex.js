import React from 'react';
import workex from '../Data/workex';

const Workex = () => {
    return (
        <React.Fragment>
            <h2>Work Experience Page</h2>
            {
                workex.map((ex) => {
                    return (<React.Fragment>
                        <img src={ex.image} alt={ex.title} />
                    </React.Fragment>)
                })
            }
        </React.Fragment>
    )
}

export default Workex;
