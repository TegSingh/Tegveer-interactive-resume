const reducer = (state, action) => {
    let newid = action.payload;
    console.log("New id: ", newid);
    if (action.type === 'SHOW_PROJECT_INFO') {
        return { ...state, seeDetails: true, display_id: newid }
    }
};

export default reducer;