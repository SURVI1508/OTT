const Model = {
    data: []
};

const GET_TREND = (state = Model, action) => {
    if (action.type === "GET_TREND") {
        return {
            ...state,
            data: action.payload
        }
    } else {
        return state;
    }
}
export default GET_TREND;