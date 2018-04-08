/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import commonStyles from '../../style/commonStyles';
import resourceStyles from '../../style/resourceStyles';
import {browserHistory} from 'react-router-dom';
import ImageSingleLine from '../common/images_SingleLine';
import ImageComplex from '../common/images_Complex';
import RaisedButton from 'material-ui/RaisedButton';
class ResourceSharePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.placeOrder = this.placeOrder.bind(this)
    }

    render() {
        return (
            <div style={commonStyles.container}>
                <div style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginBottom: 10,
                    background: 'white',
                }}>
                    <h style={commonStyles.text_gray}>已经购买过产品的好友</h>
                    <ImageSingleLine/>
                </div>

                <div style={commonStyles.block_container}>
                    <h style={commonStyles.title_second}>产品详情</h>
                    <div style={commonStyles.text_area}>
                        无所谓年龄，有所谓态度。发现、记录和创造最真实的你。2018春夏系列，王浩铭从前苏联舞蹈艺术家米凯亚·巴瑞辛尼科夫的芭蕾舞《Apollo》中得到获得设计灵感。设计师认为比起舞者在舞台上令人屏气凝神的正式演出，日常排练是一种让人更舒服的状态，WHM
                        2018春夏则将这种日常之美注入于本季的设计里。
                    </div>
                </div>

                <div style={{background: 'white'}}>
                    <ImageComplex/>
                </div>

                <div style={commonStyles.block_container_marginBottom}>
                    <h style={commonStyles.title_second}>个人素然服饰渠道</h>
                    <p style={commonStyles.text_price}>&nbsp;¥ 98</p>
                    <div style={commonStyles.flex_row_container}>
                        <p style={commonStyles.text_gray}>销量: <span style={commonStyles.text_number}>1580</span>
                        </p>
                        <p style={commonStyles.text_gray}>库存: <span style={commonStyles.text_number}>1000</span>
                        </p>
                        <p style={commonStyles.text_gray}>浏览: <span style={commonStyles.text_number}>1000</span>
                        </p>
                    </div>
                </div>

                <div style={commonStyles.block_container}>
                    <h style={commonStyles.text_gray}>如果您对产品有什么疑惑或需求，请直接联系我哦</h>
                    <RaisedButton label="联系" fullWidth={true} backgroundColor="white" labelColor="#353535"
                                  labelStyle={commonStyles.btn_text}
                                  style={commonStyles.btn}
                    />
                    <RaisedButton label="购买" fullWidth={true} backgroundColor="#353535" labelColor="#FFFFFF"
                                  labelStyle={commonStyles.btn_text}
                                  style={commonStyles.btn}
                                  onClick={this.placeOrder}
                    />
                </div>
            </div>
        );
    }

    //跳转到下单页面
    placeOrder() {
        this.props.history.push("/order/:10000");
    }

    componentWillMount() {
        // document.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx25118b98db9eb608&redirect_uri='
        //     + encodeURIComponent(document.location.href) + '&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
    }
}

export default ResourceSharePage;
