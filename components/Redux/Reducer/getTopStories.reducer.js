const Model = {
    data: []
};

const GET_TOP_STORIES = (state = Model, action) => {
    if (action.type === "GET_TOP_STORIES") {
        return {
            ...state,
            data: action.payload,
        };
    } else {
        return state;
    }
}
export default GET_TOP_STORIES;