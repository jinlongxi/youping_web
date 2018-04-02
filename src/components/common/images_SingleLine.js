/**
 * Created by jinlongxi on 18/4/2.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
//import IconButton from 'material-ui/IconButton';
//import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 80,
        background: '#F4F4F4',
        marginTop:10
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        paddingLeft:10
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

const tilesData = [
    {
        id: 1,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        id: 2,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',
    },
    {
        id: 3,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 4,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 5,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 6,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 7,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 9,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 8,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 10,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
    {
        id: 11,
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522646431820&di=6bc9f0f5e6eaa89ce11f92b9762e1ddd&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fkidsphotolib_bbs%2F1411%2F06%2Fc0%2F40615870_1415241440156_medium.jpg',
        title: 'Breakfastasdf',
        author: 'jill111sdfs',

    },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
    <div style={styles.root}>
        <GridList style={styles.gridList} cols={2} cellHeight='auto'>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.id}
                    //title={tile.title}
                    //actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)"/></IconButton>}
                    style={{width: 50, height: 50, marginRight: 10}}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                    <img style={{borderRadius: 27}} src={tile.img}/>
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSingleLine;