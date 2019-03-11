import {
    SAVE_COMMENT,
    SAVE_COMMENT_SUCCESS,
    SAVE_COMMENT_FAIL,
    GET_COMMENT,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAIL,
    DEL_COMMENT,
    DEL_COMMENT_SUCCESS,
    DEL_COMMENT_FAIL
} from './ActionTypes';

import axios from 'axios';

export function saveCommentClick(commentObj){
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(saveComment());

        return axios.post('/api/comment/save', { commentObj })
        .then((response) => {
            dispatch(saveCommentSuccess());
        }).catch((error) => {
            dispatch(saveCommentFail(error.response.data.code));
        });
    };
}


export function saveComment() {
    return {
        type: SAVE_COMMENT
    };
}

export function saveCommentSuccess() {
    return {
        type: SAVE_COMMENT_SUCCESS,
    };
}

export function saveCommentFail(error) {
    return {
        type: SAVE_COMMENT_FAIL,
        error
    };
}




export function getCommentClick(dramaId){
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(getComment());

        return axios.post('/api/comment/get', { dramaId })
        .then((response) => {
            dispatch(getCommentSuccess(response.data));
        }).catch((error) => {
            dispatch(getCommentFail(error.response));
        });
    };
}


export function getComment() {
    return {
        type: GET_COMMENT
    };
}

export function getCommentSuccess(result) {
    return {
        type: GET_COMMENT_SUCCESS,
        result
    };
}

export function getCommentFail(error) {
    return {
        type: GET_COMMENT_FAIL,
        error
    };
}


export function delCommentClick(commentId){
    return (dispatch) => {
        // Inform Register API is starting
        dispatch(delComment());
        //console.log("action",commentId)
        return axios.post('/api/comment/del', {commentId})
        .then((response) => {
            dispatch(delCommentSuccess());
        }).catch((error) => {
            dispatch(delCommentFail(error.response.data.code));
        });
    };
}


export function delComment() {
    return {
        type: DEL_COMMENT
    };
}

export function delCommentSuccess() {
    return {
        type: DEL_COMMENT_SUCCESS,
    };
}

export function delCommentFail(error) {
    return {
        type: DEL_COMMENT_FAIL,
        error
    };
}
