import React from 'react';
import { useGlobalContext } from '../context';
import { ContactMeForm } from '../Components/ContactMeForm';

const Dashboard = () => {

    const { skillsSearchList, updateSkillSearchList, showContactForm, unshowContactForm, seeContactForm } = useGlobalContext()
    const [searchInput, setSearchInput] = React.useState('');

    const handleSubmit = (e) => {
        console.log("Skill Form submitted");
        e.preventDefault();
    }

    React.useEffect(() => {
        console.log("Use effect called");
        updateSkillSearchList(searchInput);
    }, [searchInput])

    return (
        <React.Fragment>
            <div id={seeContactForm ? `dashboard-contact-form-show` : `dashboard`}>
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
                <div className="underline" style={{ "color": "black" }}></div>
                <div>
                    <p id="about">
                        Hello, I am an Final year Undergraduate Software engineering student at Ontario Tech University specializing in Internet of Things. I like programming and have a passion for troubleshooting. I enjoy listening to music and watching anime in my spare time. I am currently working as a Research Associate at my university under the supervision of my professors. I enjoy working on machine learning algorithms and data managemnet systems. I expect to graduate in April 2022. I am an international student and have been studying in Ontario, Canada for around 4 years now.
                    </p>
                </div>
                <div id="skills-list">
                    <form onSubmit={() => handleSubmit()}>
                        <input type="text" value={searchInput} id="skill-input" placeholder="Enter skills" onChange={(e) => {
                            setSearchInput(e.target.value);
                        }} />
                        <button className="submit" type="submit">
                            Search
                        </button>
                    </form>
                    {
                        skillsSearchList.map((skill, index) => {
                            return <p className="skill-item" key={index}>{skill}</p>
                        })
                    }
                </div>
            </div>
            <div>
                <ContactMeForm />
            </div>
        </React.Fragment >
    )
}

export default Dashboard;
