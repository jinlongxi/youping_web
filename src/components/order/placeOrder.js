/**
 * Created by jinlongxi on 18/3/30.
 */
import React, {Component} from 'react';
import '../../style/App.css';

class PlaceOrder extends Component {
    render() {
        return (
            <div className="Container">
                <p>这个下单页面{this.props.match.params.productId}</p>
            </div>
        );
    }

    componentWillMount() {
        console.log(this.props.match.params.productId)
    }
}

export default PlaceOrder;
