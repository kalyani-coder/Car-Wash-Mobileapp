import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




import Login from './Components/Login';
import Otp from './Components/Otp';
import Home from './Components/Home';
import Appointment from './Components/Appointment';
import Washing from './Components/Washing';
import Confirmation from './Components/Confirmation';
import Notification from './Components/Notification';
import Confirm from './Components/Confirm';
import Profile from './Components/Profile';
import Signup from './Components/Signup';



const Stack = createStackNavigator();

function App() {
  return (

    <View style={styles.container}>
      <NavigationContainer theme={{ colors: { background: 'white' } }}
        fallback={<Text>Loading...</Text>}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Set up your Account" component={Login} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="Appointment" component={Appointment} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Washing" component={Washing} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Signup" component={Signup} />

        </Stack.Navigator>
      
      </NavigationContainer>
      
     
     
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    // position: 'relative',
  },
});
export default App;
