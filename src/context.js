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
    skillsSearchList: skills,
    seeContactForm: false
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const showProjectDetails = (id) => {
        dispatch({ type: 'SHOW_PROJECT_DETAILS', payload: id })
    };

    const closeProjectDetails = () => {
        dispatch({ type: 'CLOSE_PROJECT_DETAILS' });
    };

    const showCertificateDetails = (id) => {
        dispatch({ type: 'SHOW_CERTIFICATE_DETAILS', payload: id });
    }

    const unshowCertificateDetails = (id) => {
        dispatch({ type: 'UNSHOW_CERTIFICATE_DETAILS', payload: id });
    }

    const updateSkillSearchList = (searchInput) => {
        dispatch({ type: 'UPDATE_SKILL_SEARCH_LIST', payload: searchInput })
    }

    const showContactForm = () => {
        dispatch({ type: 'SHOW_CONTACT_FORM' });
    }

    const unshowContactForm = () => {
        dispatch({ type: 'UNSHOW_CONTACT_FORM' });
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                showProjectDetails,
                closeProjectDetails,
                showCertificateDetails,
                unshowCertificateDetails,
                updateSkillSearchList,
                showContactForm,
                unshowContactForm
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