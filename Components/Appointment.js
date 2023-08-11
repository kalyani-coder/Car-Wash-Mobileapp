import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Upcoming from './Upcoming';
import Cancled from './Cancled';
import Completed from './Completed';


const Tab = createMaterialTopTabNavigator();
const Appointment = () => {
  return (
   
    <Tab.Navigator initialRouteName="Upcoming"
    tabBarOption={{
      activeTintColor: 'white',   // Text color when active
      inactiveTintColor: 'black', // Text color when inactive
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


// class CustomTabBar extends Component {
//   renderTabButtons = () => {
//     const { state, descriptors, navigation } = this.props;

//     return state.routes.map((route, index) => {
//       const { options } = descriptors[route.key];
//       const label = options.tabBarLabel || route.name;

//       const isFocused = state.index === index;

//       const onPress = () => {
//         const event = navigation.emit({
//           type: 'tabPress',
//           target: route.key,
//           canPreventDefault: true,
//         });

//         if (!isFocused && !event.defaultPrevented) {
//           navigation.navigate(route.name);
//         }
//       };

//       return (
//         <TouchableOpacity
//           key={route.key}
//           onPress={onPress}
//           style={[
//             styles.tabButton,
//             { backgroundColor: isFocused ? 'darkgrey' : 'white' },
//           ]}
//         >
//           <Text style={{ color: isFocused ? 'white' : 'black' }}>{label}</Text>
//         </TouchableOpacity>
//       );
//     });
//   };

//   render() {
//     return (
//       <View style={styles.tabBarContainer}>{this.renderTabButtons()}</View>
//     );
//   }
// }

// class Appointment extends Component {
//   render() {
//     return (
      
//         <Tab.Navigator initialRouteName="Upcoming"
//           tabBar={props => <CustomTabBar {...props} />}
//         >
//           <Tab.Screen name="Upcoming" component={Upcoming} />
//           <Tab.Screen name="Completed" component={Completed} />
//           <Tab.Screen name="Cancled" component={Cancled} />
//         </Tab.Navigator>
     
//     );
//   }
// }

// const styles = StyleSheet.create({
 
//   tabBarContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: 'grey',
//   },
//   tabButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
// });

// export default Appointment;