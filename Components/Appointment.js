import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from './Upcoming';
import Cancled from './Cancled';
import Completed from './Completed';
import { ScrollView } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons'; 


const Tab = createMaterialTopTabNavigator();
const Appointment = () => {
  return (
   
    <Tab.Navigator initialRouteName="Upcoming"
    screenOptions={{
      // tabStyle: { width: 120 },
      tabBarActiveTintColor:'black',
      tabBarInactiveTintColor: 'gray',
      
    }}
    >
      <Tab.Screen name="Upcoming" component={Upcoming} 
          options={{
            tabBarLabel: 'Upcoming',
              
          }}/>
      <Tab.Screen name="Completed" component={Completed} 
      options={{
            tabBarLabel: 'Completed',
             
          }}/>
      <Tab.Screen name="Canceled" component={Cancled} />
      
      {/* Add more screens as needed */}
    </Tab.Navigator>
    
   
  );
};

export default Appointment;

// **************************
