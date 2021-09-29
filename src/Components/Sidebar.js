import '../index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Projects from '../Pages/Projects';
import Certifications from '../Pages/Certifications';
import Workex from '../Pages/Workex';
import transcript from '../Pages/Transcript.pdf';
import resume from '../Pages/Resume.pdf';
import profile from '../Images/profile.PNG';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <React.Fragment>
            <Router>
                <div className="sidebar">
                    <div className="name">
                        <h1>Tegveer Singh</h1>
                    </div>
                    <div className="profile-picture-div">
                        <img src={profile} alt="Profile-picture" className="profile-picture" />
                    </div>
                    <div id="sidebar-description">
                        <div id="github-div">
                            <p className="info">
                                <a href="https://github.com/TegSingh" id="github" target="_blank">
                                    <GoMarkGithub className="icons" />
                                </a>
                            </p>
                        </div>
                        <div id="phone-div">
                            <p className="info" id="phone" >
                                <FiPhoneCall className="icons" />
                            </p>
                        </div>
                        <div id="linked-in-div">
                            <p className="info">
                                <a href="https://www.linkedin.com/in/tegveer-singh-067548172/" id="linked-in" target="_blank">
                                    <FaLinkedin className="icons" />
                                </a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="router-link">
                            <Link to='/projects' className="sidebar-link">Projects</Link>
                        </p>
                        <p className="router-link">
                            <Link to='/certifications' className="sidebar-link">Certifications</Link>
                        </p>
                        <p className="router-link">
                            <Link to='/workex' className="sidebar-link">Work Experience</Link>
                        </p>
                        <p className="router-link">
                            <a href={transcript} target="_blank" className="sidebar-link">Transcript</a>
                        </p>
                        <p className="router-link">
                            <a href={resume} target="_blank" className="sidebar-link">Resume</a>
                        </p>
                    </div>
                    {

                    }
                </div>
                <Switch>
                    <Route exact path="/"><Dashboard /></Route>
                    <Route exact path="/projects"><Projects /></Route>
                    <Route exact path="/certifications"><Certifications /></Route>
                    <Route exact path="/workex"><Workex /></Route>
                </Switch>
            </Router>
        </React.Fragment >
    )
}

export default Sidebar;