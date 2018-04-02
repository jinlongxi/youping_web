/**
 * Created by jinlongxi on 18/4/2.
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        height:'100%'
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Breakfast',
        author: 'jill111',
        featured: true,
    },
    {
        id: 2,
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        id: 3,
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        id: 4,
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        featured: true,
    },
    {
        id: 5,
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Hats',
        author: 'Hans',
    },
    {
        id: 6,
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        id: 7,
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        id: 8,
        img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1977804817,1381775671&fm=200&gp=0.jpg',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */
const GridListComplex = () => (
    <div style={styles.root}>
        <GridList
            cols={2}
            cellHeight={200}
            padding={1}
            style={styles.gridList}
        >
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.id}
                    //title={tile.title}
                    //actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                    actionPosition="left"
                    titlePosition="top"
                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                    cols={tile.featured ? 2 : 1}
                    rows={tile.featured ? 2 : 1}
                >
                    <img src={tile.img}/>
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListComplex;