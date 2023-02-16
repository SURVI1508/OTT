const Model = {
    data: []
};

const GET_TOP_STORIES = (state = Model, acttion) => {
    if (acttion.type === "GET_TOP_STORIES") {
        return {
            ...state,
            data: acttion.payload,
        };
    }
    else {
        return state;
    }
}
export default GET_TOP_STORIES;