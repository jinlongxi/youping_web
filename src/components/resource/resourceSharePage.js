/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import '../../style/App.css';
import '../../style/resource.css';
import {Link} from 'react-router-dom'

class ResourceSharePage extends Component {
    render() {
        return (
            <div className="Container">
                <div className="main">
                    <p>这个资源分享页面</p>
                </div>
                <div className="footer">
                    <button>联系</button>
                    <Link to={`/order/` + this.props.match.params.productId}>下单</Link>
                </div>
            </div>
        );
    }

    componentWillMount() {
        console.log(this.props)
        document.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx25118b98db9eb608&redirect_uri='
            + document.location.href + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
    }
}

export default ResourceSharePage;
