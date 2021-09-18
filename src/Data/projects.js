import motl from '../Images/Projects/motl.png';
import tsch from '../Images/Projects/tsch-sim.png';
import navigation from '../Images/Projects/navigation.png';
import vulnerabilitydataset from '../Images/Projects/vulnerability-dataset.png';
import merng from '../Images/Projects/MERNG.png';
import gitpy from '../Images/Projects/gitpy.png'

const projects = [
    {
        "id": 1,
        "title": "Multiple Object Tracking LIDAR",
        "category": "Research",
        "technologies": [
            "OpenCV-C++", "ROS"
        ],
        "completion": "2021-08-06",
        "description": [
            "This is a research project that uses machine learning to detect Objects in real time",
            "Kalman Filters were used and a dynamic approach approach was proposed to obstacle tracking in robots",
            "The image shows a simulation with clusters formed around the moving objects indicating that they have been succesfully detected",
            "A research paper for this was approved and published"
        ],
        "source": "NA",
        "image": motl
    },
    {
        "id": 2,
        "title": "Network Optimization-TSCH-Sim",
        "category": "Research",
        "technologies": [
            "Javascript", "Computer Networks"
        ],
        "completion": "2021-09-03",
        "description": [
            "This is a research project that focused on adding Manual routes and schedule to a wireless Network",
            "I was assigned the task of modifying the open source code of TSCH-Sim to add new routing and scheduler",
            "The outputs were assessed and confirmed with the author of TSCH-Sim",
            "The contribution to the main code is pending review by the author of TSCH-Sim"
        ],
        "source": "https://github.com/TegSingh/tsch-Sim",
        "image": tsch
    },
    {
        "id": 3,
        "title": "Embedded Software Vulnerability DS",
        "category": "Research",
        "technologies": [
            "C/C++"
        ],
        "completion": "currently in progress",
        "description": [
            "This project aims to create a dataset to train a software to flag vulnerabilities in Embedded Softwares",
            "The dataset contains code snippets labelled as being severe or non severe Linux source code security vulnerabilities"
        ],
        "source": "https://github.com/TegSingh/Embedded-Software-Dataset",
        "image": vulnerabilitydataset
    },
    {
        "id": 4,
        "title": "Navigation System",
        "category": "Course",
        "technologies": [
            "OpenCV-Python", "Flask", "SQL"
        ],
        "completion": "2021-03-31",
        "description": [
            "This project was a part of Introduction to Artifical Intelligence course I took in 3rd year",
            "The program inputs source and destination of a person and generates an Optimum Route",
            "The inputs are handled using Flask and the route is calculated using A-Star Algorithm"
        ],
        "source": "https://github.com/TegSingh/Navigation",
        "image": navigation
    },
    {
        "id": 5,
        "title": "Github Stats - Python",
        "categories": "Research",
        "technologies": [
            "Python", "Git", "GitPython", "data structures"
        ],
        "completion": "Currently in progress",
        "description": [
            "This project contains scripts to get github author, commit and file stats",
            "The scripts generates stats like #commits/authors per file, #commits/author, along with other commit details",
        ],
        "source": "https://github.com/TegSingh/Github-Python",
        "image": gitpy
    },
    {
        "id": 6,
        "title": "Student Assistant App",
        "categories": "Personal",
        "technologies": [
            "React-Native", "Node", "Express", "MongoDB", "GraphQL", "Redux"
        ],
        "completion": "Currently in progress",
        "description": [
            "This app uses MERNG stack to create an app to assist student schedule",
            "It currently contains features like GPA and course grade Calculator",
        ],
        "source": "NA",
        "image": merng
    }
]

export default projects;