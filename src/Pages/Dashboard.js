import React from 'react';
import skills from '../Data/skills';
import { useGlobalContext } from '../context';

const Dashboard = () => {

    const { skillinput, skillsSearchList } = useGlobalContext()

    const handleSubmit = () => {
        console.log("Skill Form submitted");

    }

    return (
        <React.Fragment>
            <div id="dashboard">
                <div id="dashboard-title">
                    <div className="name-title">
                        <h1>About me</h1>
                    </div>
                </div>
                <div id="dashboard-info-div">
                    <p className="dashboard-info">tegveer2211@gmail.com</p>
                    <p className="dashboard-info">Ontario Tech University</p>
                    <p className="dashboard-info">Software Engineering</p>
                </div>
                <div className="space"></div>
                <div className="underline"></div>
                <div>
                    <p id="about">
                        Hello, I am an Final year Undergraduate Software engineering student at Ontario Tech University specializing in Internet of Things. I like music and I have a passion for troubleshooting. I enjoy programming and watching anime in my spare time. I am currently working as a Research Associate at my university under the supervision of my professors. Along with this, I am taking final year courses including embedded systems and mobile app development. I expect to graduate April 2022. In the future, I plan on working on machine learning algorihms that are embedded in IoT devices. I also produce music and upload videos on social media platforms once in a while. I am an international student and have been studying in Ontario, Canada for around 4 years now.
                    </p>
                </div>
                <div id="skills-list">
                    <form onSubmit={() => handleSubmit()}>
                        <input type="text" value={skillinput} id="skill-input" placeholder="Enter skills" />
                        <button className="submit" type="submit">
                            Search
                        </button>
                    </form>
                    <ul>
                        {
                            skillsSearchList.map((skill) => {
                                return <p className="skill-item">{skill}</p>
                            })
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;
