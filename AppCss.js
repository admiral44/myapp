const { StyleSheet } = require("react-native");

const AppCss = StyleSheet.create({
    AppCssContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginBottom:8
    },
    AppCssForm:{
        padding: 4, 
        margin: 4, 
        flex: 6,
        backgroundColor:'#f6f6f6',
        justifyContent: 'center',
    }
})

export default AppCss;