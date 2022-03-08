import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function Details({ navigation }){
    return (
        <View style={tw.style('justify-center p-3 m-5 border-2 rounded-lg border-purple-500')}>
            <Text>{ navigation.getParam('title')}</Text>
            <Text>{ navigation.getParam('body')}</Text>
            <Text>{ navigation.getParam('rating')}</Text>
        </View>
    )
}