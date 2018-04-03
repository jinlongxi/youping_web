/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import commonStyles from '../../style/commonStyles';
import resourceStyles from '../../style/resourceStyles';
import {Link} from 'react-router-dom';
import ImageSingleLine from '../common/images_SingleLine';
import ImageComplex from '../common/images_Complex';
import RaisedButton from 'material-ui/RaisedButton';
class ResourceSharePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={commonStyles.container}>
                <div style={resourceStyles.main}>
                    <div style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        marginBottom: 10,
                        background: 'white',
                        shadowColor: '#040000',
                        shadowOffset: {width: 20, height: 100},
                        shadowRadius: 360,
                        shadowOpacity: '13%',
                        width: '100%'
                    }}>
                        <h style={{fontSize: 14, color: '#999899', paddingLeft: 10, marginBottom: 10}}>已经购买过产品的好友</h>
                        <ImageSingleLine/>
                    </div>
                    <div style={{margin: 0}}>
                        <h style={{fontSize: 16, color: '#4D4B4B', paddingLeft: 10}}>产品详情</h>
                        <div style={{
                            fontSize: 14,
                            color: '#878787',
                            lineHeight: 1.43,
                            padding: 10,
                        }}>
                            这里面可以很明显看到，font-size值并没有规定要用哪个值，它只是一个基数，元素的像素大小并不会因为这个基数有变化（所以上面问了三个人有三个不同的值，这没问题的）。也由于我们以375量取大小，所以在iPhone6上效果是与设计稿一致的。另外不是rem也是可以的（第三步不做），直接用px，
                            更加简单。
                        </div>
                    </div>
                    <div style={{padding: 10}}>
                        <ImageComplex/>
                    </div>
                    <div style={{width: '100%'}}>
                        <h style={{
                            fontSize: 16,
                            color: '#4D4B4B',
                            marginLeft: 10,
                            marginRight: 10,
                        }}>便携式果汁搅拌机
                        </h>
                        <h style={{
                            fontSize: 19,
                            color: '#D1231A',
                            borderBottom: 0.5,
                            borderBottomColor: '#C2C2C2',
                            borderBottomStyle: 'solid',
                            display: 'block',
                            marginLeft: 10,
                            marginRight: 10,
                            paddingTop: 10,
                            paddingBottom: 10
                        }}>&nbsp;¥ 98
                        </h>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 10,
                            paddingRight: 10,
                            borderBottom: 10,
                            borderColor: '#eee',
                            borderStyle: 'solid',
                            borderTop: 0
                        }}>
                            <p style={{fontSize: 14, color: '#999899'}}>销量: 1580</p>
                            <p style={{fontSize: 14, color: '#999899'}}>库存: 1000</p>
                            <p style={{fontSize: 14, color: '#999899'}}>浏览: 1000</p>
                        </div>
                        <div style={{
                            fontSize: 14,
                            color: '#878787',
                            lineHeight: 1.43,
                            margin: 10,
                        }}>
                            <span>如果您对产品有什么疑惑或需求，请直接联系我哦</span>
                            <RaisedButton label="联系" fullWidth={true} backgroundColor="white" labelColor="#7FD149"
                                          labelStyle={{
                                              fontSize: 17
                                          }}
                                          style={{
                                              marginTop: 10,
                                              marginBottom: 10,
                                              height: 42,
                                          }}/>
                            <RaisedButton label="购买" fullWidth={true} backgroundColor="#7FD149" labelColor="white"
                                          labelStyle={{
                                              fontSize: 17
                                          }}
                                          style={{
                                              marginTop: 10,
                                              marginBottom: 10,
                                              height: 42
                                          }}
                            />
                        </div>
                    </div>
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
