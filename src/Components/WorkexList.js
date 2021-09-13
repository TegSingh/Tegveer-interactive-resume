import React from 'react';
import workex from '../Data/workex';
import WorkexCard from './WorkexCard';

const WorkexList = () => {
    return (
        <React.Fragment>
            <h2>Workex Page</h2>
            {
                workex.map((ex) => {
                    return <WorkexCard {...ex} />
                })
            }
        </React.Fragment>
    )
}

export default WorkexList;