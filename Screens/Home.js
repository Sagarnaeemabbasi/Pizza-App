import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Profile from './Profile';
export default function Home({navigation}) {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'profile') {
                iconName = 'person';
                color = 'purple';
              }
              return <Icon name={iconName} size={30} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: 'darkblue',
            tabBarInactiveTintColor: 'black',
          })}>
          <Tab.Screen
            options={{
              tabBarLabel: 'apbar',
              headerShown: false,
            }}
            name="profile"
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
