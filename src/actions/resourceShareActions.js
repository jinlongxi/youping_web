/**
 * Created by jinlongxi on 18/3/30.
 */
'use strict';
import {Alert} from 'react-native';
import * as TYPES from '../constants/ActionTypes';
import Request from '../utils/request';
import ServiceURl from '../utils/service';

//加载
export function loading(Boole) {
    return (dispatch) => {
        dispatch({'type': TYPES.LODING, Boole});
    };
}







