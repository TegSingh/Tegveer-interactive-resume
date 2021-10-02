import { skills } from "./Data/skills";

const reducer = (state, action) => {

    // Show the project details window
    if (action.type === 'SHOW_PROJECT_DETAILS') {
        let newid = action.payload;
        console.log("New id: ", newid);
        return { ...state, seeProjectDetails: true, display_project_id: newid }
    }

    // Close the project details window
    if (action.type === 'CLOSE_PROJECT_DETAILS') {
        console.log("Close project details called");

        return { ...state, seeProjectDetails: false, display_project_id: 0 }
    }

    // Show the certificate details window
    if (action.type === 'SHOW_CERTIFICATE_DETAILS') {
        let newid = action.payload;
        console.log("New id: ", newid);
        return { ...state, seeCertificateDetails: true, display_certificate_id: newid }
    }

    if (action.type === 'UNSHOW_CERTIFICATE_DETAILS') {
        return { ...state, seeCertificateDetails: true, display_certificate_id: 0 }
    }

    if (action.type === 'UPDATE_SKILL_SEARCH_LIST') {
        let newSearchList = skills.filter((skill) => skill.toLowerCase().includes(action.payload.toLowerCase()));
        return { ...state, skillsSearchList: newSearchList };
    }
};

export default reducer;