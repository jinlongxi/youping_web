/**
 * Created by jinlongxi on 18/4/2.
 */
import React, {Component} from 'react';
import WxImageViewer from 'react-wx-images-viewer';

class GridListComplex extends Component {
    state = {
        imags: [
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
            'https://t11.baidu.com/it/u=65942632,802928940&fm=173&app=25&f=JPEG?w=640&h=884&s=7290128D6E537AC430141B810300D08D',
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522733941086&di=33eccd92b09dda504ca52f8a8b784942&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010a1b554c01d1000001bf72a68b37.jpg%401280w_1l_2o_100sh.png',
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