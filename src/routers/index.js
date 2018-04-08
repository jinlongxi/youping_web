/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import Resource from '../components/resource/resourceSharePage';
import order from '../components/order/placeOrder';
import address from '../components/order/addAddress';

const confidential = {
    APP_ID: 'xxxxxx', //Please use your owe app id;
    APP_SECRET: 'xxxxxxxxx', //Please use your owe secret
};

const setTitle = title => () => document.title = title;

export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/:productId" exact  onLoad={setTitle('添加地址')}  component={Resource}/>
                    <Route path="/order/:productId" component={order}/>
                    <Route path="/address/" onLoad={setTitle('添加地址')} component={address}/>
                    <Redirect to="/:productId"/>
                </Switch>
            </HashRouter>
        )
    }

    wechatAuth(nextState, replace, next) {
        const uri = document.location.href;
        const array = uri.split('/');
        const code = array.reverse()[0];
        if (code.length > 6) {
            alert(code);
        } else {
            let fromurl = "http://www.vivafoo.com/oauth2_react.php";
            document.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx25118b98db9eb608&redirect_uri='
                + encodeURIComponent(fromurl) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
        }
        //const uri = document.location.href;
        // const query = uri.query(true);
        // const {code} = query;
    }

    componentWillMount() {
        //alert('请求中');
        //this.wechatAuth()
    }

}