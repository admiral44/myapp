import React from 'react'

// Context
import ThemeProvider from './Contexts/index'

import { Button, Text, View, Alert, StyleSheet, StatusBar, Pressable, Image } from 'react-native';
import CardComp from './components/card/CardComp';
import TestComp from './components/testcomp/TestComp';
import FormComp from './components/formcomp/FormComp';
import ListComp from './components/ListCard/ListComp';
import AppCss from './AppCss';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import Register from './Screens/Register';

// Icons import.
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const StackNavigation = createNativeStackNavigator();

const App = () => {

    const onPressFunction = () => {
        Alert.alert('Log Out', 'Hello Shubham are you sure you want to log out ?', [
            { text: 'No', onPress: () => console.log('No Pressed') },
            { text: 'Yes', onPress: () => console.log('Yes Pressed') }
        ])
    }

    return (
        <ThemeProvider>
            <NavigationContainer>
                <StackNavigation.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1e1e1e' }, headerTintColor: '#f5f5f5', headerBackVisible: false }}>
                    <StackNavigation.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <StackNavigation.Screen name='Register' component={Register} options={{ headerShown: false }} />

                    <StackNavigation.Screen name="Home" component={HomeScreen} options={{
                        headerRight: () =>
                            <Pressable onPress={onPressFunction}>
                                <Ionicons name="menu" size={24} color="#f5f5f5" />
                            </Pressable>
                    }} />
                </StackNavigation.Navigator>
            </NavigationContainer>
        </ThemeProvider>
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