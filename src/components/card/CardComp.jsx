import React from 'react'
import { Text, View } from 'react-native'
import CardStyleCss from './CardStyleCss'

const CardComp = () => {
    return (
        <View style={CardStyleCss.card}>
            <Text style={CardStyleCss.title}>Card Components</Text>
        </View>
    )
}

export default CardComp