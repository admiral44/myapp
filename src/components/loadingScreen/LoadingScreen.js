import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { mainContext } from '../../Contexts'

const LoadingScreen = () => {
    return (
        <View style={style.mainContext}>
            <ActivityIndicator size="large" color="#7EA1FF" />
            <Text style={style.text}>Loading</Text>
        </View>
    )
}

const style = StyleSheet.create({
    mainContext: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#1e1e1e',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: 'capitalize'
    }
})

export default LoadingScreen