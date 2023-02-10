// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/Signup';
import ImagePicker from './Screens/ImagePicker';

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp} />
        <Stack.Screen name="LogIn" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="image" options={{headerShown:false}} component={ImagePicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
