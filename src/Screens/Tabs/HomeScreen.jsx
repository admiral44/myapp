import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Text, View, Button, Platform, StyleSheet, Pressable } from 'react-native'


// import { Label } from '@atlaskit/form';
// import Textfield from '@atlaskit/textfield';

const HomeScreen = (props) => {

    const navRoute = useRoute();
    const { name } = navRoute.params;
    const { navigation, route } = props;

    const onPressLogout = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={HomeStyles.container}>
            <Text style={HomeStyles.normalText}>Welcome {name}</Text>
            {/* <Text style={HomeStyles.text}>Home Screen</Text>
            <Text style={HomeStyles.text}>{Platform.OS}, {Platform.Version}</Text>
            <Text style={HomeStyles.text}>Platform : {JSON.stringify(Platform.constants)}</Text> */}

            <Pressable style={HomeStyles.button} onPress={() => onPressLogout()}>
                <Text style={HomeStyles.text}>Logout</Text>
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