/**
 * Created by jinlongxi on 18/4/2.
 */
import React, {Component} from 'react';
import WxImageViewer from 'react-wx-images-viewer';

class GridListComplex extends Component {
    state = {
        imags: [
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522757817314&di=678639b13a76173238be497b248418af&imgtype=0&src=http%3A%2F%2Fpic.chinasspp.com%2FNews%2Fu%2F592514%2Fimage%2F201801%2F19091538_4299.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522757978780&di=4cc93c6d847ff490058a213d83e2f13c&imgtype=0&src=http%3A%2F%2Fpic.chinasspp.com%2FNews%2Fu%2F693191%2Fimage%2F201603%2F15141908_9095_s_605x455.jpg',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522757851080&di=0f384e5444609f02094c9e4e0c58100c&imgtype=0&src=http%3A%2F%2Fpic.chinasspp.com%2FNews%2Fu%2F672043%2Fimage%2F201612%2F22082031_9812_s_605x455.jpg',
        ],
        index: 0,
        isOpen: false
    };

    onClose = () => {
        this.setState({
            isOpen: false
        })
    }

    openViewer(index) {
        this.setState({
            index,
            isOpen: true
        })
    }

    render() {
        const {
            imags,
            index,
            isOpen
        } = this.state;

        return (
            <div className="app">
                <div className="img-list">
                    {
                        this.state.imags.map((item, index) => {
                            return <div className="img" key={index}>
                                <img src={item} alt="" onClick={this.openViewer.bind(this, index)} width="100%"
                                     height="auto" className=""/>
                            </div>
                        })
                    }
                </div>
                {
                    isOpen ? <WxImageViewer onClose={this.onClose} urls={this.state.imags} index={index}/> : ""
                }
            </div>
        )
    }
}

export default GridListComplex;