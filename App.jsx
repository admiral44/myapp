import React from 'react'
import { Button, Text, View, Alert, StyleSheet, StatusBar, Pressable, Image } from 'react-native';
// import CardComp from './components/card/CardComp';
// import TestComp from './components/testcomp/TestComp';
// import FormComp from './components/formcomp/FormComp';
// import ListComp from './components/ListCard/ListComp';
// import AppCss from './AppCss';

// Context
import ThemeProvider, { mainContext } from './src/Contexts/index.jsx';

// Navigation
import AllNavigation from './src/Navigation/AllNavigation.js';

const App = () => {

    return (
        <ThemeProvider>
            <AllNavigation />
        </ThemeProvider>
    )
}


export default App;