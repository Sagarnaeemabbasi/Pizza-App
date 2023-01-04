// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import SignUp from './Screens/Signup';
import Login from './Screens/Login';
import AdminScreen from './Screens/AdminScreens/AdminScreen';
import {Button, FlatList} from 'react-native';
import SinglePizza from './Screens/UserScreens/SinglePizza';

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdminScreen">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Details" component={SinglePizza} />
        <Stack.Screen
          name="AdminScreen"
          options={{
            headerTitle: 'Admin Screen',
            headerStyle: {backgroundColor: 'white'},
            headerTitleAlign: 'center',
            headerTitleStyle:{fontSize:20},
            // headerLeft: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
          component={AdminScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
