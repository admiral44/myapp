import React, { useState, useContext } from 'react'
import { ActivityIndicator, StatusBar, Text, TextInput, View, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { client } from '../../API/client';
import SCREENS from '../index.js';
import { mainContext } from '../../Contexts';

const LoginScreen = (props) => {

    const { navigate } = props.navigation;
    const {setAccessToken} = useContext(mainContext);

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        number: '',
        password: ''
    })

    const TextInputHandler = (val, name) => {
        setFormData({...formData, [name]: val})
    }

    const onFromSubmitHandler = async () => {
        setIsLoading(true);
        if (formData.number !== '' && formData.password !== '') {
            try {
                const res = await client.post('/login', formData)
                const data = await res.data;
                // console.log("data : ", data.status === 200 && data.statusMessage === 'Success');
                if (data.status === "200" && data.statusMessage === 'Success') {
                    ToastAndroid.show(data.message, ToastAndroid.SHORT);
                    setAccessToken(data.data.token);
                    setTimeout(() => {
                        setIsLoading(false);
                        setFormData({ user_number: '', user_password: '' });
                        navigate(SCREENS.HOME, { name: data.data.name })
                    }, 500);
                } else {
                    ToastAndroid.show(data.message, ToastAndroid.SHORT);
                }
            } catch (error) {
                console.log("onFromSubmitHandler error : ", error.message)
                ToastAndroid.show('Error : Something went wrong ' + error, ToastAndroid.SHORT);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            } 
        } else {
            setIsLoading(false);
            ToastAndroid.show('Please fill all fields!!', ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"default"} backgroundColor={'#1e1e1e'} hidden={false} />

            <View style={styles.header}>
                <FontAwesome6 name="circle-user" size={30} color={'#f5f5f5'} />
                <Text style={styles.title}>Login</Text>
            </View>

            <Text style={styles.labelText}>Number</Text>
            <TextInput
                keyboardType='decimal-pad'
                style={styles.inputStyle}
                value={formData.user_number}
                onChangeText={(val) => TextInputHandler(val, 'number')}
            />

            <Text style={styles.labelText}>Password</Text>
            <TextInput
                secureTextEntry={true}
                keyboardType='default'
                style={styles.inputStyle}
                value={formData.user_password}
                onChangeText={(val) => TextInputHandler(val, 'password')}
            />

            <View style={styles.innerContainer}>
                <Pressable>
                    <Text style={styles.text}>Forgot Password?</Text>
                </Pressable>

                <Pressable>
                    <Text style={styles.text} onPress={() => navigate('Register')}>New User?</Text>
                </Pressable>
            </View>

            <Pressable style={styles.button} onPress={() => onFromSubmitHandler()}>
                {
                    isLoading ? <ActivityIndicator size={'small'} color={'#f5f5f5'} /> : <Text style={styles.text}>Login</Text>
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
    inputStyle: {
        height: 40,
        width: '100%',
        borderColor: '#343a40',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        color: '#f5f5f5',
        textTransform: 'capitalize'
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
    labelText: {
        color: '#f5f5f5',
        paddingLeft: 2,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        textTransform: 'capitalize',
        width: '100%',
    }
})

export default LoginScreen;