import { Map, List, fromJS } from 'immutable';
import * as types from '../actions/ActionTypes';

const initialState = Map({
    get: {
        status: "INIT",
        error: -1,
        data: [],
        average: 0
    },
    dramaList: ['setset']
})


export default function drama(state = initialState, action) {

    switch(action.type) {
        /* user get*/
        case types.GET_ALL_DRAMA:
            return state.setIn(["get", "data"], action.data);
        case types.GET_MY_DRAMA:
            return state.setIn(["dramaList"], action.data);          
        default:
            return state;
    }
}