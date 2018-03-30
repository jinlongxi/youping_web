import React, {Component} from 'react';
import './style/App.css';
import Router from './routers/index';
import {Provider} from 'react-redux';
import configureStore from './store/index';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            store: configureStore(()=> {
                this.setState({isLoading: false})
            })
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Router/>
            </Provider>
        )
    }

}