import React from 'react';

const Dashboard = () => {
    return (
        <React.Fragment>
            <div id="dashboard">
                <div className="name-title">
                    <div className="name-title-left">
                        <h1>About me</h1>
                    </div>
                </div>
                <div className="space"></div>
                <div className="underline"></div>
                <p id="about">
                    Hello, I am an Final year Undergraduate Software engineering student at Ontario Tech University specializing in Internet of Things. I like music and I have a passion for troublshooting. I enjoy programming and watching anime in my spare time. I am currently working as a Research Associate at my university under the supervision of my professors. Along with this, I am taking final year course including embedded systems and mobile app developments. In the future, I plan on working on machine learning algorihms that are embedded in IoT devices. I also produce music and upload videos on social media platforms once in a while. I am an international student and have been studying in Ontario, Canada for around 4 years now.
                </p>
                <p className="info">tegveer2211@gmail.com</p>
                <p className="info">Ontario Tech University</p>
                <p className="info">Software Engineering</p>
            </div>
        </React.Fragment>
    )
}

export default Dashboard;
