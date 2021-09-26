import React, { useState, useContext, useReducer, useEffect } from 'react'
import projects from './Data/projects';
import workex from './Data/workex';
import certificates from './Data/certificates';
import reducer from './reducer';
import { skills } from './Data/skills';

const AppContext = React.createContext();

const initialState = {
    seeProjectDetails: false,
    display_project_id: 0,
    seeCertificateDetails: false,
    display_certificate_id: 0,
    skillInput: "",
    skillsSearchList: skills,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const showProjectDetails = (id) => {
        console.log(`Show project details called for ${id}`);
        dispatch({ type: 'SHOW_PROJECT_DETAILS', payload: id })
    };

    const closeProjectDetails = () => {
        console.log("Close project details called");
        dispatch({ type: 'CLOSE_PROJECT_DETAILS' });
    };

    const showCertificateDetails = (id) => {
        console.log("Show certificate details called");
        dispatch({ type: 'SHOW_CERTIFICATE_DETAILS', payload: id });
    }


    return (
        <AppContext.Provider
            value={{
                ...state,
                showProjectDetails,
                closeProjectDetails,
                showCertificateDetails
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider }