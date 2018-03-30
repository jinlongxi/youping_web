/**
 * Created by jinlongxi on 18/3/30.
 */
import {combineReducers} from 'redux';
import resourceShareReducer from './resourceShareReducer';
export default combineReducers({
    resourceShareStore: resourceShareReducer,
});