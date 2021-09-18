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
        dispatch({ type: 'SHOW_PROJECT_INFO', payload: id })
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                showProjectDetails,
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