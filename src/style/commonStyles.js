/**
 * Created by jinlongxi on 18/4/2.
 */
const styles = {
    //页面容器
    container: {
        display: 'flex',
        flexDirection: 'column',
        background: '#eee'
    },
    //页面块级容器
    block_container: {
        background: 'white',
        padding: 10,
    },
    block_container_marginBottom:{
        background: 'white',
        padding: 10,
        marginBottom:10
    },
    //二级标题三级标题
    title_second: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold'
    },
    title_third: {
        fontSize: 15,
        color: '#141414',
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    //按钮
    btn:{
        marginTop: 10,
        marginBottom: 10,
        height: 42
    },
    btn_text:{
        fontSize: 17
    },
    //文本
    text_price:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        borderBottom: 0.5,
        borderBottomColor: '#C2C2C2',
        borderBottomStyle: 'solid',
        paddingBottom: 10,
        fontFamily: 'Microsoft JhengHei'
    },
    text_gray:{
        fontSize: 14,
        color: '#A0A0A0'
    },
    text_number:{
        color: '#0E0E0E',
        fontSize: 14
    },
    text_area:{
        fontSize: 14,
        color: '#060606',
        lineHeight: 1.8,
    },
    //flex盒子
    flex_row_container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    //分割线
    text_divider:{
        height:1,
        border:'none',
        borderTop:1,
        borderTopColor:'#C2C2C2',
        borderTopStyle:'solid'
    }
};

export default styles