import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from './Upcoming';
import Cancled from './Cancled';
import Completed from './Completed';
import { ScrollView } from 'react-native-gesture-handler';


const Tab = createMaterialTopTabNavigator();
const Appointment = () => {
  return (
   
    <Tab.Navigator initialRouteName="Upcoming"
    tabBarOption={{
      activeTintColor: 'blue',   // Text color when active
      inactiveTintColor: 'green', // Text color when inactive
      style: { backgroundColor: 'grey' }, // Background color of the tab bar
      indicatorStyle: { backgroundColor: 'darkgrey' },
      
    }}>
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Canceled" component={Cancled} />
      
      {/* Add more screens as needed */}
    </Tab.Navigator>
    
   
  );
};

export default Appointment;
