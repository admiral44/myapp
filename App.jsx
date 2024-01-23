import React from 'react'
import { Button, Text, View, Alert, StyleSheet, StatusBar, Pressable, Image } from 'react-native';
import CardComp from './components/card/CardComp';
import TestComp from './components/testcomp/TestComp';
import FormComp from './components/formcomp/FormComp';
import ListComp from './components/ListCard/ListComp';
import AppCss from './AppCss';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

// Icons import.
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const StackNavigation = createNativeStackNavigator();

const App = () => {

    const onPressFunction = () => {
        Alert.alert('Log Out', 'Hello Shubham are you sure you want to log out ?', [
            { text: 'No', onPress: () => console.log('No Pressed') },
            { text: 'Yes', onPress: () => console.log('Yes Pressed') }
        ])
    }

    return (
        <NavigationContainer>
            <StackNavigation.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1e1e1e' }, headerTintColor: '#f5f5f5', headerBackVisible: false }}>
                <StackNavigation.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

                <StackNavigation.Screen name="Home" component={HomeScreen} options={{
                    headerRight: () =>
                        <Pressable onPress={onPressFunction}>
                            <Ionicons name="log-out" size={24} />
                        </Pressable>
                }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}

export default App;

// <View style={AppCss.AppCssContainer}>
//     <View style={{ padding: 4, margin: 4, flex: 1 }}>
//         <Text>Title</Text>
//     </View>
//     <View style={AppCss.AppCssForm}>
//         <FormComp />
//     </View>

//     <View style={{ padding: 4, margin: 4, flex: 4 }}>
//         <ListComp />
//     </View>
// </View>