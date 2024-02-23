import React, { useState } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, Text, TextInput, View, Pressable, ToastAndroid } from 'react-native';

// Icons
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { client } from '../API/client.js';

const Register = (props) => {

    const { navigate } = props.navigation;

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_number: '',
        user_password: ''
    })

    const TextInputHandler = (val, name) => {
        setFormData({...formData, [name]: val})
    }

    const onFromSubmitHandler = async () => {
        setIsLoading(true);

        // console.warn("Form Data : ", formData.user_number !== '', formData.user_password);
        if ( formData.user_name !== '' && formData.user_number !== '' && formData.user_password !== '') {
            try {
                const res = await client.post('/register', formData);
                const data = await res.data
                if (data.code == 200 && data.status == 'success') {
                    ToastAndroid.show('Registered Successfully', ToastAndroid.SHORT);
                    setTimeout(() => {
                        setIsLoading(false);
                        setFormData({ user_name: '', user_number: '', user_password: '' });
                        navigate('Home', { name: 'Shubham' });
                    }, 500);
                    
                } else {
                    ToastAndroid.show('Error in Registration : ' + data.message, ToastAndroid.LONG);
                }
            } catch (error) {
                console.log("onFromSubmitHandler error : ", error)
                ToastAndroid.show('Unknown Error : ' + error, ToastAndroid.LONG);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }

        } else {
            setTimeout(() => {
                setIsLoading(false);
                ToastAndroid.show('Please Enter Credentials', ToastAndroid.SHORT);
            }, 500);
        }
    }

    return (
        <View style={styles.mainView}>
            <StatusBar barStyle={"default"} backgroundColor={'#1e1e1e'} hidden={false} />

            <View style={styles.header}>
                <FontAwesome6 name="circle-user" size={30} color={'#f5f5f5'} />
                <Text style={styles.title}>Sign Up</Text>
            </View>

            <Text style={styles.labelText}>Name</Text>
            <TextInput
                keyboardType='ascii-capable'
                style={styles.inputStyle}
                value={formData.user_name}
                onChangeText={(val) => TextInputHandler(val, 'user_name')}
            />

            <Text style={styles.labelText}>Number</Text>
            <TextInput
                keyboardType='decimal-pad'
                style={styles.inputStyle}
                value={formData.user_number}
                onChangeText={(val) => TextInputHandler(val, 'user_number')}
            />

            <Text style={styles.labelText}>Password</Text>
            <TextInput
                secureTextEntry={true}
                keyboardType='default'
                style={styles.inputStyle}
                value={formData.user_password}
                onChangeText={(val) => TextInputHandler(val, 'user_password')}
            />
            <View style={styles.innerContainer}>
                {/* <Pressable>
                    <Text style={styles.text}>Forgot Password?</Text>
                </Pressable> */}

                <Pressable>
                    <Text style={styles.text} onPress={() => navigate('Login')}>Already Registered?</Text>
                </Pressable>
            </View>

            <Pressable style={styles.button} onPress={() => onFromSubmitHandler()} disabled={isLoading}>
                {
                    isLoading ? <ActivityIndicator size={'small'} color={'#f5f5f5'} /> : <Text style={styles.text}>Sign Up</Text>
                }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#1e1e1e',
        gap: 18
    },
    text: {
        color: '#f5f5f5',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: 'capitalize'
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
    labelText: {
        color: '#f5f5f5',
        paddingLeft: 2,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        textTransform: 'capitalize',
        width: '100%',
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        backgroundColor: '#17a2b8',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
    },
})

export default Register;