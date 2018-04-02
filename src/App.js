import React, {Component} from 'react';
import Router from './routers/index';
import {Provider} from 'react-redux';
import configureStore from './store/index';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <Router/>
                </MuiThemeProvider>
            </Provider>
        )
    }

}