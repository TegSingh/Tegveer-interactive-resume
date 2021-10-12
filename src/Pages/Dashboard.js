import React from 'react';
import skills from '../Data/skills';
import { useGlobalContext } from '../context';
import { ContactMeForm } from '../Components/ContactMeForm';

const Dashboard = () => {

    const { skillsSearchList, updateSkillSearchList } = useGlobalContext()
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
                        <input type="text" value={searchInput} id="skill-input" placeholder="Enter skills" onChange={(e) => {
                            setSearchInput(e.target.value);
                        }} />
                        <button className="submit" type="submit">
                            Search
                        </button>
                    </form>
                    {
                        skillsSearchList.map((skill, index) => {
                            console.log(skill, index);
                            return <p className="skill-item" key={index}>{skill}</p>
                        })
                    }
                </div>
                <div className="space"></div>
                <div className="space"></div>
                <div className="space-new"></div>
                <div className="space-new"></div>
                <div className="space-new"></div>
                <div className="space-new"></div>
                <div className="space-new"></div>
                <div className="">
                    <ContactMeForm />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;
