/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import commonStyles from '../../style/commonStyles';
import Stepper from 'react-stepper-primitive';
import Textarea from "react-textarea-autosize";
import jia from '../../images/order/Plus.png';
import RaisedButton from 'material-ui/RaisedButton';
class PlaceOrder extends Component {
    render() {
        return (
            <div style={commonStyles.container}>
                <div style={commonStyles.block_container_marginBottom}>
                    <h style={commonStyles.title_second}>选择购买</h>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingRight: 10,
                        marginTop: 10
                    }}>
                        <Stepper
                            min={1}
                            max={100}
                            render={({
                                getFormProps,
                                getInputProps,
                                getIncrementProps,
                                getDecrementProps
                            }) =>
                                <form {...getFormProps()}>
                                    <button style={{
                                        border: 0.1,
                                        borderColor: '#999899',
                                        borderStyle: 'solid',
                                        padding: 10
                                    }} {...getDecrementProps()}>
                                        <img src={jia}/>
                                    </button>
                                    <input style={{
                                        border: 0.5,
                                        borderColor: '#999899',
                                        borderStyle: 'solid',
                                        width: 80,
                                        marginRight: 5,
                                        marginLeft: 5,
                                        padding: 11
                                    }} {...getInputProps()} />
                                    <button style={{
                                        border: 0.1,
                                        borderColor: '#999899',
                                        borderStyle: 'solid',
                                        padding: 10
                                    }} {...getIncrementProps()}>
                                        <img src={jia}/>
                                    </button>
                                </form>
                            }
                        />
                        <p style={commonStyles.text_gray}>库存剩余数量: <span style={commonStyles.text_number}>588</span></p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: "100%",}}>
                        <h style={commonStyles.title_second}>备注</h>
                        <Textarea minRows={5}
                                  maxRows={6}
                                  placeholder="请写下你需要我们注意的需求"
                                  style={{
                                      border: 0.1,
                                      borderColor: '#999899',
                                      borderStyle: 'solid',
                                      marginTop: 10,
                                      fontSize:13,
                                      color:'#999899'
                                  }}
                        />
                    </div>
                </div>

                <div style={commonStyles.block_container_marginBottom}>
                    <h style={commonStyles.title_second}>收货地址</h>
                    <p style={commonStyles.text_area}>上海市 长宁区 中山西路933号</p>
                    <p style={commonStyles.text_area}>上海市 长宁区 中山西路933号</p>
                </div>
                <div style={commonStyles.block_container}>
                    <RaisedButton label="确定下单" fullWidth={true} backgroundColor="#353535" labelColor="#FFFFFF"
                                  labelStyle={commonStyles.btn_text}
                                  style={commonStyles.btn}/>
                </div>
            </div>
        );
    }

    componentWillMount() {
        console.log(this.props.match.params.productId)
    }
}

export default PlaceOrder;
