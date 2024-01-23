import React from 'react'
import { ActivityIndicator, Button, Platform, StatusBar, Text, View } from 'react-native';

const LoginScreen = (props) => {

    const { navigate } = props.navigation;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e1e', gap: 18 }}>
            <StatusBar barStyle={"default"} backgroundColor={'#1e1e1e'} hidden={false} />

            <ActivityIndicator size={'large'} color={'red'} />
            <Text>Login Screen for : {Platform.OS}, {Platform.Version}</Text>
            <Button title='Login' onPress={() => navigate('Home', { name: 'Shubham' })} />

            <Text>Platform : {JSON.stringify(Platform)}</Text>
        </View>
    )
}

export default LoginScreen;