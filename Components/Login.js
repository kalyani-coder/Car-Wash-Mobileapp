import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,

} from 'react-native'


// #f7db03 YELLOW
//#006b51 DARK GREEN
//#c4fcf7 FAINT GREEN
// #659b9c MADIUM GREEN

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      phoneNumberError: '',
    }
  };

  handlePhoneNumberChange = (text) => {
    // Remove non-numeric characters from the input
    const numericValue = text.replace(/[^0-9]/g, '');

    // Limit the input to 10 characters
    if (numericValue.length > 10) {
      return;
    }

    // Update the state with the validated input
    this.setState({ phoneNumber: numericValue, phoneNumberError: '' });
  };
  handleLogin = () => {
    const { phoneNumber } = this.state;

    // Reset error message
    this.setState({ phoneNumberError: '' });

    // Validate the phone number
    if (phoneNumber.length === 10) {
      const generatedOTP = Math.floor(1000 + Math.random() * 9000);
      this.props.navigation.navigate('Otp', { phoneNumber, generatedOTP });
    }
    else {
      this.setState({ phoneNumberError: 'Phone number must be exactly 10 digits.' });
    }
    // Proceed with your logic here
    console.log(`Phone number: ${phoneNumber}`);
  };
  render() {
    const { phoneNumber, phoneNumberError } = this.state;

    return (
      <>
        {/* <Text>Set up your Account</Text> */}
        {/* <Text style={styles.log}>Log in</Text> */}

        <View style={styles.container}>

          <Text style={styles.name}>Enter your phone number</Text>
          <TextInput
            style={styles.textBox}
            placeholder="Enter Phone Number"
            onChangeText={this.handlePhoneNumberChange}
            value={phoneNumber}
            keyboardType={'numeric'}
            maxLength={10}
          >
          </TextInput>
          {phoneNumberError !== '' && <Text style={styles.errorText}>{phoneNumberError}</Text>}

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.sign}>By signing up,you agree to GoGoRide's </Text>

          <TouchableOpacity>
            <Text style={styles.service}>Terms of Service and Privacy Policy</Text>
          </TouchableOpacity>

           <View style={styles.account}>
          <Text style={styles.text}>Already had an account? </Text>
          <TouchableOpacity>
            <Text style={styles.login}>Log in</Text>
          </TouchableOpacity>
          </View>

        </View>
      </>
    );
  }

}

const styles = StyleSheet.create({
  // log: {
  //   textAlign: 'center',
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   paddingTop: 150,
  //   paddingBottom: 50,
  // },
  name: {
    fontSize: 20,
    marginHorizontal: 30,
    paddingTop: 40,
    marginTop: 10,
    color: 'black',
  },
  textBox: {
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 30,
    marginTop: 20,

  },
  button: {
    backgroundColor: '#5B7586',
    height: 50,
    paddingTop: 10,
    marginHorizontal: 30,
    marginTop: 15,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sign: {
    textAlign: 'center',
    paddingTop: 300

  },
  service: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginHorizontal: 30,
  },
  account:{
    flexDirection:'row',
    marginTop:100,
    marginHorizontal:90,
  },
  text:{
    textAlign:'center',
    fontSize:15
  },
  login:{
    color:'blue',
    textDecorationLine:'underline',
    fontSize:15
  }

})
export default Login;



