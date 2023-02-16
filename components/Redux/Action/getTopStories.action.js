import axios from 'axios'

const GET_TOP_STORIES = () => {
    return async (dispatch) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://sotb.cybertizedigital.com/api/v1/articles/topstoryhome"
            });
            dispatch({
                type: "GET_TOP_STORIES",
                payload: response.data
            });

        } catch (err) {
            console.log(err);
        }
    }
}
export default GET_TOP_STORIES;