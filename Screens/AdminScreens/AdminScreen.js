import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import EmployeeId from './EmployeeId';
import Vehicles from '../UserScreens/Vehicles';
import ResgisteredVehicles from '../UserScreens/ResgisteredVehicles';
import Map from '../UserScreens/Map';
import AddPizza from './Addpizza';
import ShowPizzas from '../ShowPizzas';
import PickImage from '../UserScreens/PickImage';
import SinglePizza from '../UserScreens/SinglePizza';

export default function AdminScreen({navigation}) {
  const RouteArray = [
    {
      name: 'Employer Id',
      navigate: 'employeeId',
    },
    {
      name: 'Registered Vehicles',
      navigate: 'registeredVehicles',
    },
    {
      name: 'Vehicles',
      navigate: 'vehicles',
    },
  ];
  const Tab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="ShowPizza"
          // tabBar={()=><View style={{backgroundColor:"black"}}><Text>Text</Text></View>} // want to how your custom tabbar
          // detachInactiveScreens={false}
          // backBehavior='history'      // It fires when we click back button
          screenOptions={({route}) => ({
            tabBarStyle: () => {
              if (route.name === 'Details') {
                display = 'none';
              }
            },

            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Employer Id') {
                iconName = 'person';
                color = 'purple';
              } else if (route.name === 'Vehicles') {
                iconName = 'local-taxi';
                color = 'purple';
              } else if (route.name === 'Registered Vehicles') {
                iconName = 'commute';
                color = 'purple';
              } else if (route.name === 'Details') {
                iconName = 'details';
                color = 'purple';
              } else if (route.name === 'AddPizza') {
                iconName = 'localPizza';
                color = 'purple';
              } else if (route.name === 'ShowPizza') {
                iconName = 'arrow_drop_down';
                color = 'purple';
              } 
              else if (route.name === 'ImagePick') {
                iconName = 'image';
                color = 'purple';
              }
              else if (route.name === 'appMap') {
                iconName = 'navigation';
                color = 'purple';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={30} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: 'darkblue',
            tabBarInactiveTintColor: 'black',
          })}>
          {/* options={{ tabBarBadge: 3 }}   This will use for show notifications as badge  */}
          <Tab.Screen
            options={{
              // title: 'appbabar' custom title
              tabBarLabel: 'apbar',
              headerShown: false,
            }}
            name="Employer Id"
            component={EmployeeId}
          />
          <Tab.Screen
               options={{tabBarShowLabel: false, headerShown: false}}S
            name="Vehicles"
            component={Vehicles}
          />
          <Tab.Screen
               options={{tabBarShowLabel: false, headerShown: false}}
            name="Registered Vehicles"
            component={ResgisteredVehicles}
          />
          <Tab.Screen
                options={{tabBarShowLabel: false, headerShown: false}}
            name="Details"
            component={SinglePizza}
          />
          <Tab.Screen
            name="appMap"
            options={{tabBarShowLabel: false, headerShown: true}}
            component={Map}
            style={{display:'none'}}
          />
          <Tab.Screen
            name="AddPizza"
            options={{tabBarShowLabel: false, headerShown: false}}
            component={AddPizza}
          />
          <Tab.Screen
            name="ShowPizza"
            options={{tabBarShowLabel: false, headerShown: false}}
            component={ShowPizzas}
          />
          {/* <Tab.Screen
            name="ImagePick"
            options={{tabBarShowLabel: false, headerShown: false}}
            component={PickImage}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
