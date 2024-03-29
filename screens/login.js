import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import tw from 'twrnc';


export default function Login({ navigation }) {

    const gotoHome = () => {
        navigation.navigate('Home')
    }

    return (
      <View>
        <View style={[tw.style(' justify-center bg-purple-600 pb-20 rounded-bl-full	'),{
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        } ]}>
          <Text style={tw.style('pt-30 text-center text-3xl text-white')}>Login</Text>
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="User email"></TextInput>
          <TextInput style={tw.style('w-80 h-12 ml-8 mt-5 rounded-xl bg-white pl-3')} placeholder="Password"></TextInput>
          <TouchableOpacity 
          style={tw.style('w-80 h-12 ml-8 mt-10 rounded-3xl justify-center items-center bg-purple-700')}
          onPress={() => gotoHome()}
          >
            <Text style={tw.style('text-center text-white')}>Login</Text>
          </TouchableOpacity>
          
        </View>
        <View style={tw.style('justify-center items-center bg-white')}>
          <Text style={tw.style('pt-20 text-gray-300')}>Need an account?</Text>
          <View style={tw.style('flex-row')}>
            <TouchableOpacity>
                <Image style={tw.style('h-10 w-10')} source={require('../assets/images/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={tw.style('h-10 w-10')} source={require('../assets/images/facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={tw.style('h-10 w-10')} source={require('../assets/images/twitter.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={tw.style('w-80 h-12 mt-10 rounded-3xl justify-center items-center bg-purple-700')}>
            <Text style={tw.style('text-center text-white')}>Sign up</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );

}