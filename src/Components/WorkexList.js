import React from 'react';
import workex from '../Data/workex';
import WorkexCard from './WorkexCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';


const WorkexList = () => {
    return (
        <React.Fragment>
            <div className="workex-list">
                <h2>Workex Page</h2>
                {
                    workex.map((ex) => {
                        return <WorkexCard {...ex} />
                    })
                }
                <Link to='/' className="home-button-link">Back Home</Link>
            </div>
        </React.Fragment>
    )
}

export default WorkexList;