import { Map, List, fromJS } from 'immutable';
import * as types from '../actions/ActionTypes';

const initialState = Map({
    save: {
        status : "INIT",
        error: -1
    },
    get: {
        status: "INIT",
        error: -1,
        data: [],
        average: 0
    },
    del: {
        status:"INIT",
        error: -1
    }
})

export default function comment(state, action) {
    if(typeof state === "undefined") state = initialState;

    switch(action.type) {
        /* comment save */
        case types.SAVE_COMMENT:
            return state.setIn(["save","status"], "SAVE_COMMENT");

        case types.SAVE_COMMENT_SUCCESS:
            return state.setIn(["save","status"], "SAVE_COMMENT_SUCCESS");

        case types.SAVE_COMMENT_FAIL:
            return state.setIn(["save","status"], "SAVE_COMMENT_FAIL")
                        .setIn(["save","error"], action.errorCode);

        /* comment get */
        case types.GET_COMMENT:
            return state.setIn(["get","status"], "GET_COMMENT");

        case types.GET_COMMENT_SUCCESS:
            return state.setIn(["get","status"], "GET_COMMENT_SUCCESS")
                        .setIn(["get","data"], action.result.data)
                        .setIn(["get","average"], action.result.average);

        case types.GET_COMMENT_FAIL:
            return state.setIn(["get","status"], "GET_COMMENT_FAIL")
                        .setIn(["get","error"], action.errorCode);                        

        /* comment delete */
        case types.DEL_COMMENT:
            return state.setIn(["del","status"], "DEL_COMMENT");

        case types.DEL_COMMENT_SUCCESS:
            return state.setIn(["del","status"], "DEL_COMMENT_SUCCESS");

        case types.DEL_COMMENT_FAIL:
            return state.setIn(["del","status"], "DEL_COMMENT_FAIL")
                        .setIn(["del","error"], action.errorCode);                        
        default:
            return state;
    }
}