/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import commonStyles from '../../style/commonStyles';
import resourceStyles from '../../style/resourceStyles';
import {Link} from 'react-router-dom';
import ImageSingleLine from '../common/images_SingleLine';
class ResourceSharePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={commonStyles.container}>
                <div style={resourceStyles.main}>
                    <p>这些人购买过</p>
                    <ImageSingleLine/>
                </div>
                <div style={resourceStyles.footer}>
                    <button>联系</button>
                    <Link to={`/order/` + this.props.match.params.productId}>下单</Link>
                </div>
            </div>
        );
    }

    componentWillMount() {
        // document.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx25118b98db9eb608&redirect_uri='
        //     + encodeURIComponent(document.location.href) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
    }
}

export default ResourceSharePage;
