import '../index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Projects from '../Pages/Projects';
import Certifications from '../Pages/Certifications';
import Workex from '../Pages/Workex';
import profile from '../Images/profile.PNG';

const Sidebar = () => {
    return (
        <React.Fragment>
            <Router>
                <div className="sidebar">
                    <div className="profile-picture-div">
                        <img src={profile} alt="Profile-picture" className="profile-picture" />
                    </div>
                    <ul>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/certifications'>Certifications</Link>
                        </li>
                        <li>
                            <Link to='/workex'>Work Experience</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/"><Dashboard /></Route>
                    <Route exact path="/projects"><Projects /></Route>
                    <Route exact path="/certifications"><Certifications /></Route>
                    <Route exact path="/workex"><Workex /></Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Sidebar;