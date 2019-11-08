import axios from "axios";

export const FETCH_DOGS_LOADING = "FETCH_DOGS_LOADING";
export const FETCH_DOGS_SUCCESS = "FETCH_DOGS_SUCCESS";
export const FETCH_DOGS_FAILED = "FETCH_DOGS_FAILED";

export const dogsLoading = () => ({ type: FETCH_DOGS_LOADING });
export const dogsLoadingSuccess = data => ({
    type: FETCH_DOGS_SUCCESS,
    payload: data
});
export const dogsLoadingFailure = error => ({
    type: FETCH_DOGS_FAILED,
    payload: error
});

export function fetchDogs() {

    return function (dispatch) {
        dispatch(dogsLoading());

        return axios
            .get(`https://dog.ceo/api/breed/labrador/images`)
            .then(res => {
                console.log("here's the res", res);
                const info = res.data.message
                dispatch(dogsLoadingSuccess(info))
            })
            .catch(err => dispatch(dogsLoadingFailure(err)))
    }
}