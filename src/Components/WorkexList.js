import React from 'react';
import workex from '../Data/workex';
import WorkexCard from './WorkexCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';


const WorkexList = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <h2>Workex Page</h2>
            {
                workex.map((ex) => {
                    return <WorkexCard {...ex} />
                })
            }
            <button className="home-button">
                <Link to='/'>Back Home</Link>
            </button>
        </React.Fragment>
    )
}

export default WorkexList;