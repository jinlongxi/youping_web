/**
 * Created by jinlongxi on 18/4/7.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import commonStyles from '../../style/commonStyles';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, grey400} from 'material-ui/styles/colors';
import Person from 'material-ui/svg-icons/social/person';
import Tel  from 'material-ui/svg-icons/maps/local-phone';
import Place  from 'material-ui/svg-icons/maps/place';
import PlaceDetail  from 'material-ui/svg-icons/maps/person-pin-circle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import area from './area.json';
const styles = {
    underlineStyle: {
        borderColor: grey400,
    },
    customWidth: {
        width: '29%',
    },
};

const provinceName = [];
for (let a of area) {
    provinceName.push(a.name)
}
class AddAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            provinceName: null,//省
            cityName: null,//市
            cityArray: [],
            countyName: null,//区
            countyArray: []
        };
        this.provinceChange = this.provinceChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.countyChange = this.countyChange.bind(this)
    }

    //省数据
    provinceItems(values) {
        return area.map((item, index) => (
            <MenuItem
                key={index}
                insetChildren={true}
                checked={values && values.indexOf(item.name) > -1}
                value={item.name}
                primaryText={item.name}
            />
        ));
    }

    provinceChange(event, index, provinceName) {
        this.setState({
            provinceName: provinceName,
            cityArray: area[index].city,
            cityName: null,//市
            countyName: null,//区
            countyArray: []
        })
    };

    //市数据
    cityItems(values) {
        return this.state.cityArray.map((item, index) => (
            <MenuItem
                key={index}
                insetChildren={true}
                checked={values && values.indexOf(item.name) > -1}
                value={item.name}
                primaryText={item.name}
            />
        ));
    }

    cityChange(event, index, cityName) {
        this.setState({
            cityName: cityName,
            countyArray: this.state.cityArray[index].area,
            countyName: null,//区
        })
    };

    //区数据
    countyItems(values) {
        return this.state.countyArray.map((item, index) => (
            <MenuItem
                key={index}
                insetChildren={true}
                checked={values && values.indexOf(item) > -1}
                value={item}
                primaryText={item}
            />
        ));
    }

    countyChange(event, index, countyName) {
        this.setState({
            countyName: countyName,
        })
    };

    render() {
        return (
            <div style={commonStyles.container}>
                <div style={commonStyles.block_container_marginBottom}>
                    <div style={commonStyles.flex_row_container}>
                        <Person style={{marginRight: 10}}/>
                        <TextField
                            hintText="收货人姓名"
                            fullWidth={true}
                            underlineFocusStyle={styles.underlineStyle}
                        />
                    </div>
                    <div style={commonStyles.flex_row_container}>
                        <Tel style={{marginRight: 10}}/>
                        <TextField
                            hintText="收货人电话"
                            fullWidth={true}
                            underlineFocusStyle={styles.underlineStyle}
                        />
                    </div>
                    <div style={commonStyles.flex_row_container}>
                        <Place style={{marginRight: 10}}/>
                        <SelectField
                            value={this.state.provinceName}
                            hintText="请选择省"
                            onChange={this.provinceChange}
                            fullWidth={true}
                        >
                            {this.provinceItems()}
                        </SelectField>
                    </div>
                    <div style={commonStyles.flex_row_container}>
                        <PlaceDetail style={{marginRight: 10, color: 'white'}}/>
                        <SelectField
                            fullWidth={true}
                            value={this.state.cityName}
                            hintText="请选择市"
                            onChange={this.cityChange}
                            disabled={this.state.provinceName == null}
                            underlineDisabledStyle={{bottom: 1}}
                        >
                            {this.cityItems()}
                        </SelectField>
                    </div>
                    <div style={commonStyles.flex_row_container}>
                        <PlaceDetail style={{marginRight: 10, color: 'white'}}/>
                        <SelectField
                            fullWidth={true}
                            value={this.state.countyName}
                            hintText="请选择区"
                            onChange={this.countyChange}
                            disabled={this.state.cityName == null}
                        >
                            {this.countyItems()}
                        </SelectField>
                    </div>
                    <div style={commonStyles.flex_row_container}>
                        <PlaceDetail style={{marginRight: 10, color: 'white'}}/>
                        <TextField
                            hintText="详细地址"
                            fullWidth={true}
                            underlineFocusStyle={styles.underlineStyle}
                        />
                    </div>
                </div>
                <div style={commonStyles.block_container}>
                    <RaisedButton label="确定添加" fullWidth={true} backgroundColor="#353535" labelColor="#FFFFFF"
                                  labelStyle={commonStyles.btn_text}
                                  style={commonStyles.btn}/>
                </div>
            </div>
        )
    }
}

export default AddAddress;
