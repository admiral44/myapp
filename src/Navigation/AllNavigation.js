import React, { useContext } from 'react'
import { Button, Text, View, Alert, StyleSheet, StatusBar, Pressable, Image } from 'react-native';

// Screens
import SCREENS from '../Screens/index.js';
import COLORS from '../Assets/colors/index.js';

// React navigation import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../Screens/Tabs/HomeScreen.jsx';
import LoginScreen from '../Screens/Intro/LoginScreen.jsx';
import Register from '../Screens/Intro/Register.jsx';
import Profile from '../Screens/Tabs/Profile.jsx';
import Setting from '../Screens/Tabs/Setting.jsx';

// Icons import.
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import IMAGES from '../Assets/images/index.js';
import { mainContext } from '../Contexts/index.jsx';
import LoadingScreen from '../components/loadingScreen/LoadingScreen.js';

const StackNav = createNativeStackNavigator();
const TabNav = createBottomTabNavigator();


const AllNavigation = () => {

    const { accessToken, isLoading } = useContext(mainContext);

    return (
        <NavigationContainer initialRouteName={SCREENS.LOGIN}>
            <StackNav.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1e1e1e' }, headerTintColor: '#f5f5f5', headerBackVisible: false }}>
                {
                    isLoading
                        ? <StackNav.Screen name={SCREENS.LOADING} component={LoadingScreen} options={{ headerShown: false }} />
                        : accessToken !== null
                            ? (<StackNav.Screen
                                name={SCREENS.HOME}
                                component={TabNavigator}
                                options={{
                                    headerShown: false,
                                }}
                            />)
                            : (<StackNav.Screen
                                name={SCREENS.LOGIN}
                                component={LoginScreen}
                                options={{ headerShown: false }}
                            />)
                }
                <StackNav.Screen name={SCREENS.REGISTER} component={Register} options={{ headerShown: false }} />
            </StackNav.Navigator>
        </NavigationContainer>
    )
}

export const TabNavigator = () => {

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

export default AllNavigation;