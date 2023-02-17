import axios from 'axios'

const GET_TREND = () => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://sotb.cybertizedigital.com/api/v1/articles/trendthisweek"

            });
            dispatch({
                type: "GET_TREND",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export default GET_TREND;