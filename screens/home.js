import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function Home(){
    return (
        <View style={tw.style('items-center p-10')}>
            <Text>Home Screen</Text>
        </View>
    )
}