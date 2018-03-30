/**
 * Created by jinlongxi on 18/3/30.
 */
/**
 * Created by jinlongxi on 17/12/1.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as resourceShareCreators from '../actions/resourceShareActions';
import ResourceSharePage from '../components/resource/resourceSharePage';

const mapStateToProps = (state) => {
    return {
        resourceShareState: state.resourceShareStore,
    }
};

const mapDispatchToProps = (dispatch) => {
    const resourceShareActions = bindActionCreators(resourceShareCreators, dispatch);
    return {
        resourceShareActions
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceSharePage);
