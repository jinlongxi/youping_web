/**
 * Created by jinlongxi on 18/3/30.
 */
import * as TYPES from '../constants/ActionTypes';

const initialState = {
    resourceDetailList: null,
    status: null,
    loading: false,
};

export default function login(state = initialState, action) {
    switch (action.type) {
        //微信登录
        case TYPES.LODING:
            return {
                ...state,
                loading: action.Boole
            };
        default:
            return state;
    }
}
