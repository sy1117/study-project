import { Map, List, fromJS } from 'immutable';
import * as types from '../actions/ActionTypes';

const initialState = Map({
    get: {
        status : "INIT",
        error: -1,
        result: false
    }

})


export default function user(state, action) {
    if(typeof state === "undefined") state = initialState;

    switch(action.type) {
        /* user get*/
        case types.USER_CHECK:
            return state.setIn(["get","status"], "USER_CHECK");

        case types.USER_CHECK_SUCCESS:
            return state.setIn(["get","status"], "USER_CHECK_SUCCESS")
                        .setIn(["get","result"], action.result);

        case types.USER_CHECK_FAIL:
            return state.setIn(["get","status"], "USER_CHECK_FAIL")
                        .setIn(["get","error"], action.errorCode);

                    
        default:
            return state;
    }
}