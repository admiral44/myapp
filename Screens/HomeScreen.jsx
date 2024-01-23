import React from 'react'
import { Text, View, Button } from 'react-native'

const HomeScreen = (props) => {

    const { navigation, route } = props;
 
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e1e1e', gap: 18 }}>
            <Text>Home Screen</Text>
            <Button title='Logout' onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

export default HomeScreen;