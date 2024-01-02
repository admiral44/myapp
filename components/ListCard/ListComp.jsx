import React from 'react'
import data from './data'
import { FlatList, Text, View } from 'react-native'
import ListCompCss from './ListCompCss'

const ListComp = () => {

    // console.log("Data : ", data);

    return (
        <View style={ListCompCss.ListContainer}>
            <Text style={ListCompCss.ListCompTitle}>List is here.</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Text style={ListCompCss.ListCompItem}>{item.name}</Text>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ListComp