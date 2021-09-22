import ibm_django from '../Images/Certificates/IBM-Django.png';
import udemy_cpp from '../Images/Certificates/Udemy-C++.png';

const certificates = [
    {
        "id": 1,
        "title": "Advanced C++ Programming",
        "organization": "Udemy",
        "completion": "2021-05-14",
        "skills": [
            "C++"
        ],
        "description": "This is a C++ programming practice course I finished to prepare for a research project on Object Detection. The course mainly focused on strategies of Dynamic Programming",
        "image": udemy_cpp
    },
    {
        "id": 2,
        "title": "Django Application Development",
        "organization": "IBM",
        "completion": "2021-06-16",
        "skills": [
            "Django",
            "SQL"
        ],
        "description": "This is a web application development course focusing on Python backend written in Django and database management using SQL",
        "image": ibm_django
    }
]

export default certificates;