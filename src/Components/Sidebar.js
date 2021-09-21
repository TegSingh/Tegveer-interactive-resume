import '../index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Projects from '../Pages/Projects';
import Certifications from '../Pages/Certifications';
import Workex from '../Pages/Workex';
import profile from '../Images/profile.PNG';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <React.Fragment>
            <Router>
                <div className="sidebar">
                    <div id="name">
                        <h1>Tegveer Singh</h1>
                    </div>
                    <div id="description">
                        <p className="info">tegveer2211@gmail.com</p>
                        <p className="info">Ontario Tech University</p>
                        <p className="info">Software Engineering</p>
                        <p className="info">
                            <a href="https://github.com/TegSingh">
                                <GoMarkGithub className="icons" />
                            </a>
                        </p>
                        <p className="info">
                            <FiPhoneCall className="icons" />
                        </p>
                        <p className="info">
                            {/* prevent this from moving to a new page, instead duplicate the webpage */}
                            <a href="https://www.linkedin.com/in/tegveer-singh-067548172/">
                                <FaLinkedin className="icons" />
                            </a>
                        </p>
                    </div>
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