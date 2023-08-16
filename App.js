import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Login from './Components/Login';
import Otp from './Components/Otp';
import Home from './Components/Home';
import Appointment from './Components/Appointment';
import Washing from './Components/Washing';

const Stack = createStackNavigator();

function App() {
  return (

    <View style={styles.container}>
      {/* <NavigationContainer theme={{ colors: { background: 'white'} }}
      fallback={<Text>Loading...</Text>}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Set up your Account" component={Login} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Appointment" component={Appointment} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" /> */}
   
   
     {/* <Home></Home> */}
     <Washing></Washing>
    </View>
  

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    paddingTop: 50,
    // marginTop:100
  },
});
export default App;
