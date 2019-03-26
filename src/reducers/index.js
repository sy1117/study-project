
import comment from './comment';
import user from './user';
import drama from './drama'
import { combineReducers } from 'redux';

export default combineReducers({
    comment, user, drama
});
