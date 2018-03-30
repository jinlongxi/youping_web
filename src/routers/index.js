/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import Resource from '../components/resource/resourceSharePage';
import order from '../components/order/placeOrder';

const confidential = {
    APP_ID: 'xxxxxx', //Please use your owe app id;
    APP_SECRET: 'xxxxxxxxx', //Please use your owe secret
};

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

    wechatAuth(nextState, replace, next) {
        // new URI
        // const uri = new URI(document.location.href);
        // const query = uri.query(true);
        // const {code} = query;
        //console.log(document.location.href);
        // if (code) {
        //     WechatUserStore.fetchUserInfo(code);
        //     next();
        // } else {
        alert(document.location.href);
        document.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx25118b98db9eb608&redirect_uri='
            + encodeURIComponent(document.location.href) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
    }

    componentWillMount() {
        alert('请求中');
        this.wechatAuth()
    }

}