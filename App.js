import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './src/Login and Register/Welcome'
import Login from './src/Login and Register/Login'
import Register from './src/Login and Register/Register'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
    <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}} />
    <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
    <Stack.Screen name="Register" component={Register}  options={{headerShown:false}} />

    </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App;


