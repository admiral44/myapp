import React from 'react'
import { Button, Text, View, Alert, StyleSheet, StatusBar, Pressable, Image } from 'react-native';
// import CardComp from './components/card/CardComp';
// import TestComp from './components/testcomp/TestComp';
// import FormComp from './components/formcomp/FormComp';
// import ListComp from './components/ListCard/ListComp';
// import AppCss from './AppCss';

// Screens
import SCREENS from './src/Screens/index.js';
import COLORS from './src/Assets/colors/index.js';

// Context
import ThemeProvider from './src/Contexts/index.jsx';

// React navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './src/Screens/Tabs/HomeScreen.jsx';
import LoginScreen from './src/Screens/Intro/LoginScreen.jsx';
import Register from './src/Screens/Intro/Register.jsx';

// Icons import.
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import IMAGES from './src/Assets/images/index.js';
import Profile from './src/Screens/Tabs/Profile.jsx';
import Setting from './src/Screens/Tabs/Setting.jsx';


const StackNavigation = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

    return (
        <ThemeProvider>
            <NavigationContainer initialRouteName={SCREENS.LOGIN}>
                <StackNavigation.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1e1e1e' }, headerTintColor: '#f5f5f5', headerBackVisible: false }}>

                    <StackNavigation.Screen name={SCREENS.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
                    <StackNavigation.Screen name={SCREENS.REGISTER} component={Register} options={{ headerShown: false }} />

                    <StackNavigation.Screen
                        name={SCREENS.HOME}
                        component={TabNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                </StackNavigation.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    )
}

const TabNavigator = () => {

    const onPressFunction = () => {
        Alert.alert('Log Out', 'Hello Shubham are you sure you want to log out ?', [
            { text: 'No', onPress: () => console.log('No Pressed') },
            { text: 'Yes', onPress: () => console.log('Yes Pressed') }
        ])
    }

    return (
        <Tab.Navigator initialRouteName={SCREENS.HOME}>
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={IMAGES.HOME_IMG}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.Sky500 : COLORS.Slate500
                            }}
                        />
                    ),
                    tabBarActiveTintColor: COLORS.Sky500,
                    tabBarInactiveTintColor: COLORS.Slate500,
                    tabBarStyle: {
                        paddingBottom: 6
                    },
                    headerRight: () =>
                        <Pressable onPress={onPressFunction}>
                            <Ionicons name="menu" size={24} color={COLORS.Slate500} />
                        </Pressable>,
                    headerRightContainerStyle: {
                        marginRight: 10
                    }
                }}
            />

            <Tab.Screen
                name={SCREENS.PROFILE}
                component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={IMAGES.PROFILE_IMG}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.Sky500 : COLORS.Slate500
                            }}
                        />
                    ),
                    tabBarActiveTintColor: COLORS.Sky500,
                    tabBarInactiveTintColor: COLORS.Slate500,
                    tabBarStyle: {
                        paddingBottom: 6
                    }
                }}
            />

            <Tab.Screen
                name={SCREENS.SETTINGS}
                component={Setting}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={IMAGES.SETTINGS_IMG}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.Sky500 : COLORS.Slate500
                            }}

                        />
                    ),
                    tabBarActiveTintColor: COLORS.Sky500,
                    tabBarInactiveTintColor: COLORS.Slate500,
                    tabBarStyle: {
                        paddingBottom: 6
                    }
                }}
            />
        </Tab.Navigator>
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