/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import commonStyles from '../../style/commonStyles';

class PlaceOrder extends Component {
    render() {
        return (
            <div style={commonStyles.container}>
                <p>这个下单页面{this.props.match.params.productId}</p>
            </div>
        );
    }

    componentWillMount() {
        console.log(this.props.match.params.productId)
    }
}

export default PlaceOrder;
