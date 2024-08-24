import React, { useState, useContext, useMemo } from 'react'
import { useRoute } from '@react-navigation/native';

import { Text, View, Button, Platform, StyleSheet, Pressable, ActivityIndicator } from 'react-native'
import SCREENS from '..';
import { mainContext } from '../../Contexts';


// import { Label } from '@atlaskit/form';
// import Textfield from '@atlaskit/textfield';

const HomeScreen = (props) => {

    const { accessToken, setAccessToken, isLoading, setIsLoading } = useContext(mainContext)
   
    const navRoute = useRoute();
    const { name } = navRoute.params;
    const { navigation, route } = props;


    const onPressLogout = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setAccessToken(null);
            navigation.navigate(SCREENS.LOGIN);
        }, 300);
    }

    return (
        <View style={HomeStyles.container}>
            <Text style={HomeStyles.normalText}>Welcome {name}</Text>
            {/* <Text style={HomeStyles.text}>Home Screen</Text>
            <Text style={HomeStyles.text}>{Platform.OS}, {Platform.Version}</Text>
            <Text style={HomeStyles.text}>Platform : {JSON.stringify(Platform.constants)}</Text> */}

            <Pressable style={HomeStyles.button} onPress={() => onPressLogout()} disabled={isLoading}>
                <Text style={HomeStyles.text}>{isLoading ? <ActivityIndicator size="small" color="#f5f5f5" /> : "Logout"}</Text>
            </Pressable>
        </View>
    )
}

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
        gap: 18
    },
    button: {
        width: '100%',
        backgroundColor: '#17a2b8',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
    },
    text: {
        color: '#f5f5f5',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    normalText: {
        color: '#1e1e1e',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: 'capitalize'
    }
})

export default HomeScreen;