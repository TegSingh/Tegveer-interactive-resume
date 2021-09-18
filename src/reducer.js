const reducer = (state, action) => {
    let newid = action.payload;
    console.log("New id: ", newid);

    // Show the project details window
    if (action.type === 'SHOW_PROJECT_DETAILS') {
        return { ...state, seeDetails: true, display_id: newid }
    }

    // Close the project details window
    if (action.type === 'CLOSE_PROJECT_DETAILS') {
        return { ...state, seeDetails: false, display_id: 0 }
    }
};

export default reducer;