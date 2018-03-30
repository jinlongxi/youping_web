/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import Resource from '../components/resource/resourceSharePage';
import order from '../components/order/placeOrder';

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/:productId" exact component={Resource}/>
                    <Route path="/order/:productId" component={order}/>
                    <Redirect to="/:productId"/>
                </Switch>
            </HashRouter>
        )
    }
}