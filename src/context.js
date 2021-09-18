import React, { useState, useContext, useReducer, useEffect } from 'react'
import projects from './Data/projects';
import workex from './Data/workex';
import certificates from './Data/certificates';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    seeDetails: false,
    display_id: 0
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

    return (
        <AppContext.Provider
            value={{
                ...state,
                showProjectDetails,
                closeProjectDetails
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