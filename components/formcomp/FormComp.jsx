import React, { useState, useCallback } from 'react'
import { Button, Text, TextInput, View, useColorScheme } from 'react-native'
import FormStyleCss from './FormStyleCss'

const FormComp = () => {

    const colorScheme = useColorScheme();

    const [amount, setAmount] = useState({
        name: '',
        number: '',
    })

    const onChangeInput = (val, name) => {
        setAmount((values) => ({ ...values, [name]: val }))
    }

    const addAmount = () => {
        console.warn("Data : ", amount.name, " : ", amount.number);
        setAmount({ name: '', number: '' })
    }

    return (
        <View style={{ display: 'flex', justifyContent: 'center', }}>

            {/* <Text style={FormStyleCss.FormTitleCss}>Name : {amount.name}, Number : {amount.number}</Text> */}

            <Text style={FormStyleCss.FormLabelCss}>Name</Text>
            <TextInput
                keyboardType='ascii-capable'
                placeholder='Please Enter Name.'
                style={FormStyleCss.textFieldsCss}
                onChangeText={(val) => onChangeInput(val, "name")}
                value={amount.name}
            />

            <Text style={FormStyleCss.FormLabelCss}>Number</Text>
            <TextInput
                keyboardType='number-pad'
                placeholder='Please Enter Number.'
                style={FormStyleCss.textFieldsCss}
                onChangeText={(val) => onChangeInput(val, "number")}
                value={amount.number}
            />

            <Button
                style={FormStyleCss.FormButtonCss}
                title='submit'
                onPress={addAmount}
                color={'#1e1e1e'}
            />
        </View>
    )
}

export default FormComp