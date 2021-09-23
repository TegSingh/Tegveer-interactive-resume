import React from 'react';
import workex from '../Data/workex';
import WorkexCard from './WorkexCard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';


const WorkexList = () => {
    return (
        <React.Fragment>
            <div className="workex-list">
                <div className="name-title">
                    <div className="name-title-left">
                        <h1>Work Experience</h1>
                    </div>
                    <div className="name-title-right">
                        <Link to='/' className="home-button-link">Back Home</Link>
                    </div>
                </div>
                <div className="space"></div>
                <div className="underline"></div>
                <div>
                    {
                        workex.map((ex) => {
                            return <WorkexCard {...ex} />
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default WorkexList;