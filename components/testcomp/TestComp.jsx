import React, { useCallback, useState } from 'react'
import { Button, Text, View, Alert, StyleSheet } from 'react-native';

const TestComp = () => {

    const [amount, setAmount] = useState(0)
    const incrementAmount = useCallback(() => setAmount(amount + 1))
    const makeZero = useCallback(() => { amount != 0 ? setAmount(amount - amount) : console.warn("amount already is -> Zero") })
    const decrementAmount = useCallback(() => { amount <= 0 ? Alert.alert('Zero', 'amount already is Zero.',) : setAmount(amount - 1) })
    const pressFunction = (val) => { console.warn(val) };

    const ButtonStyle = {
        margin: 8,
    }

    return (
        <>
            <View style={{ padding: 10, }}>
                <Text style={{ fontSize: 28, }}>Home</Text>
                <Text style={{ fontSize: 20, marginTop: 50, marginBottom: 50, textAlign: 'center', }}>$
                    <Text dynamicTypeRamp='callout'>{amount}</Text> Amount
                </Text>


                <View>
                    <Button style={ButtonStyle} title='Add Money' onPress={incrementAmount} />
                    <Button title='Remove Money' onPress={decrementAmount} color={'#1e1e1e'} />
                    <Button title='Make Zero' onPress={makeZero} color={'#111'} />
                    <Button title='on press' onPress={() => pressFunction("Hello Shubham")} color={'#454'} />
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 28,
        backgroundColor: '#17a2b8'
    }
})
export default TestComp