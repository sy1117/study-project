import {
    USER_CHECK,
    USER_CHECK_SUCCESS,
    USER_CHECK_FAIL
} from './ActionTypes';

import axios from 'axios';

export function userCheckClick(id, pw){
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(userCheck());

        return axios.post('/api/user/check', { id, pw })
        .then((response) => {
            dispatch(userCheckSuccess(response.data));
        }).catch((error) => {
            dispatch(userCheckFail(error.response.data.code));
        });
    };
}


export function userCheck() {
    return {
        type: USER_CHECK
    };
}

export function userCheckSuccess(result) {
    return {
        type: USER_CHECK_SUCCESS,
        result
    };
}

export function userCheckFail(error) {
    return {
        type: USER_CHECK_FAIL,
        error
    };
}
