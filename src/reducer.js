const reducer = (state, action) => {
    let newid = action.payload;
    console.log("New id: ", newid);

    // Show the project details window
    if (action.type === 'SHOW_PROJECT_DETAILS') {
        return { ...state, seeProjectDetails: true, display_project_id: newid }
    }

    // Close the project details window
    if (action.type === 'CLOSE_PROJECT_DETAILS') {
        return { ...state, seeProjectDetails: false, display_project_id: 0 }
    }

    // Show the certificate details window
    if (action.type === 'SHOW_CERTIFICATE_DETAILS') {
        return { ...state, seeCertificateDetails: true, display_certificate_id: newid }
    }
};

export default reducer;