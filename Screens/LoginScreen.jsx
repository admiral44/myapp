import React, { useState } from 'react'
import { ActivityIndicator, Button, StatusBar, Text, TextInput, View, StyleSheet, Pressable, Alert } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const LoginScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_number: '',
        user_password: ''
    })
    const { navigate } = props.navigation;

    const TextInputHandler = (val, name) => {
        setFormData((perv) => {
            return {
                ...perv,
                [name]: val
            }
        })
    }

    const onFromSubmitHandler = () => {
        setIsLoading(true);
        // console.warn(formData.user_number, formData.user_password);
        if (formData.user_number !== '' && formData.user_password !== '') {

            if (formData.user_number !== '9049789306' && formData.user_password !== 'Sh123') {
                setIsLoading(false);
                Alert.alert('Error', 'Invalid Credentials')
            } else {
                setTimeout(() => {
                    setIsLoading(false);
                    navigate('Home', { name: 'Shubham' })
                }, 1000);
            }
        } else {
            setIsLoading(false);
            Alert.alert('Error', 'Please Enter Credentials')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} backgroundColor={'#1e1e1e'} hidden={false} />

            <View style={styles.header}>
                <FontAwesome6 name="circle-user" size={30} color={'#f5f5f5'} />
                <Text style={styles.title}>Login</Text>
            </View>
            

            <TextInput 
                placeholder='Enter Number' 
                keyboardType='decimal-pad' 
                style={styles.input} 
                onChangeText={(val) => TextInputHandler(val, 'user_number')}
            />
            <TextInput 
                placeholder='Password' 
                secureTextEntry={true} 
                keyboardType='default' 
                style={styles.input} 
                onChangeText={(val) => TextInputHandler(val, 'user_password')}
            />

            <View style={styles.innerContainer}>
                <Pressable>
                    <Text>Forgot Password ?</Text>
                </Pressable>

                <Pressable>
                    <Text>New User</Text>
                </Pressable>
            </View>

            <Pressable style={styles.button} onPress={() => onFromSubmitHandler()}>
                {
                    isLoading ? <ActivityIndicator size={'small'} color={'#f5f5f5'} /> : <Text>Login</Text> 
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1e1e1e',
        gap: 18
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        gap: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#f5f5f5',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#343a40',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
    },
    button: {
        width: '100%',
        backgroundColor: '#17a2b8',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
    }
})

export default LoginScreen;