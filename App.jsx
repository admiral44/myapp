import React from 'react'
import { Button, Text, View, Alert, StyleSheet, SafeAreaView } from 'react-native';
import CardComp from './components/card/CardComp';
import TestComp from './components/testcomp/TestComp';
import FormComp from './components/formcomp/FormComp';
import ListComp from './components/ListCard/ListComp';
import AppCss from './AppCss';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

const StackNavigation = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name="Login" component={LoginScreen} />
                <StackNavigation.Screen name="Home" component={HomeScreen} />
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