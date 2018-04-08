/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import commonStyles from '../../style/commonStyles';
import Stepper from 'react-stepper-primitive';
import jia from '../../images/order/jia@3x.png';
import jian from '../../images/order/jian@3x.png';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Clear from 'material-ui/svg-icons/content/clear';
import Done from 'material-ui/svg-icons/action/done';
import Add from 'material-ui/svg-icons/content/add';
import {Button, Icon, Input} from 'uiw';

const addressArray = [
    {id: 1, content: '上海市 长宁区 中山西路933号', selected: true},
    {id: 2, content: '上海市 长宁区 中山西路955号', selected: false}
];
class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            selectAddress:0
        }
    }

    //更改购买数量
    onChange(text) {
        this.setState({
            value: text
        })
    }

    render() {
        return (
            <div style={commonStyles.container}>
                <div style={commonStyles.block_container_marginBottom}>
                    <h style={commonStyles.title_second}>购买数量</h>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Stepper
                            style={{
                                width: 100
                            }}
                            min={1}
                            max={100}
                            defaultValue={this.state.value}
                            onChange={(num)=> {
                                this.setState({
                                    value: num
                                })
                            }}
                            render={({
                                getFormProps,
                                getInputProps,
                                getIncrementProps,
                                getDecrementProps
                            }) =>
                                <form {...getFormProps()} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <button style={{
                                        border: 0,
                                        padding: 10,
                                        margin: 0,
                                        backgroundColor:'white'
                                    }}  {...getDecrementProps()}>
                                        <img style={{width: 20, height: 20}} src={jian}/>
                                    </button>
                                    <input style={{
                                        width: 30,
                                        border: 0.5,
                                        borderStyle: 'solid',
                                        borderColor: '#DADBD8',
                                        borderRadius: 0
                                    }}  {...getInputProps()} />
                                    <button style={{
                                        border: 0,
                                        padding: 10,
                                        margin: 0,
                                        backgroundColor:'white'
                                    }}
                                            {...getIncrementProps()}>
                                        <img style={{width: 20, height: 20}} src={jia}/>
                                    </button>
                                </form>}
                        />
                        <p style={commonStyles.text_gray}>库存剩余数量: <span style={commonStyles.text_number}>588</span></p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: "100%",}}>
                        <h style={commonStyles.title_second}>备注</h>
                        <Input
                            type="textarea"
                            rows={6}
                            placeholder="请写下你需要我们注意的需求"
                            style={{
                                border: 0.1,
                                borderColor: '#DADBD8',
                                borderStyle: 'solid',
                                marginTop: 10,
                                fontSize: 13,
                                color: '#999899',
                                boxShadow:0,
                            }}
                        />
                    </div>
                </div>

                <div style={commonStyles.block_container_marginBottom}>
                    <h style={commonStyles.title_second}>收货地址</h>
                    <List>
                        {
                            addressArray.map((item, index)=> {
                                return (
                                    <div key={item.id}>
                                        <ListItem style={{color: '#4D4B4B',fontSize:14,}}
                                                  primaryText={item.content}
                                                  onClick={()=>this.setState({
                                            selectAddress:index
                                        })}
                                                  rightIcon={this.state.selectAddress=== index? <Done/> :null }/>
                                        <Divider style={{backgroundColor: '#DADBD8'}}/>
                                    </div>
                                )
                            })
                        }
                    </List>
                    <Button size="small"
                            onClick={()=> {
                                this.add_Address()
                            }}
                            style={{
                                border: 0,
                                padding: 10,
                                margin: 0,
                                backgroundColor:'white'
                            }}
                    >
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Add style={{color:'#999899',fontSize:13}}/>
                            <span style={{fontSize: 13, marginLeft: 10,color:'#999899'}}>添加地址</span>
                        </div>
                    </Button>
                </div>
                <div style={commonStyles.block_container}>
                    <RaisedButton label="确定下单" fullWidth={true} backgroundColor="#353535" labelColor="#FFFFFF"
                                  labelStyle={commonStyles.btn_text}
                                  style={commonStyles.btn}/>
                </div>
            </div>
        );
    }

    //跳转到添加地址
    add_Address() {
        this.props.history.push("/address/:10000");
    }

    componentDidMount() {
        console.log(this.state.value)
    }
}

export default PlaceOrder;
