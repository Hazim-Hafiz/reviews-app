import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import tw from 'twrnc';
import Navigator from './routes/homeStack';


export default function App() {
    return (
      <Navigator />
      
    );

}