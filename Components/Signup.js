// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   StyleSheet,
//   TouchableOpacity
// } from 'react-native'

// // import DocumentPicker from 'react-native-document-picker';

// class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fullname: '',
//       email: '',
//       phoneno: '',
//       // dateOfBirth: '',
//       // address: '',
//       errors: {
//         fullname: '',
//         email: '',
//         phoneno: '',

//       },
//       selectedFile: null,

//     };
//   }

//   handleFilePick = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });

//       this.setState({
//         selectedFile: result,
//       });
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//       } else {
//         throw err;
//       }
//     }
//   };



//     //validate fullname
//     validateFullName = () => {
//       const { fullname } = this.state;
//       if (fullname === '') {
//         // this.setState({ nameError: 'Name cannot be empty' });
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             fullname: 'Name cannot be empty',
//           },
//         });
//       }
//       else {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             fullname: '',
//           },
//         });
//       }
//     }

//     validateEmail = () => {
//       const { email } = this.state;
//       if (!email.trim()) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             email: 'Please enter your email address',
//           },
//         });
//       } else {
//         // Your email validation logic
//         // For example, you could use a regular expression
//         const validEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//         if (!validEmailPattern.test(email)) {
//           this.setState({
//             errors: {
//               ...this.state.errors,
//               email: 'Please enter a valid email address',
//             },
//           });
//         } else {
//           this.setState({
//             errors: {
//               ...this.state.errors,
//               email: '',
//             },
//           });
//         }
//       }
//     };

//     validatePhoneNo = () => {
//       const { phoneno } = this.state;
//       if (!phoneno.trim()) {
//         this.setState({
//           errors: {
//             ...this.state.errors,
//             phoneno: 'Please enter your phone number',
//           },
//         });
//       } else {
//         // Your phone number validation logic
//         // For example, you could use a regular expression
//         const validPhonePattern = /^[0-9]{10}$/;
//         if (!validPhonePattern.test(phoneno)) {
//           this.setState({
//             errors: {
//               ...this.state.errors,
//               phoneno: 'Please enter a valid phone number',
//             },
//           });
//         } else {
//           this.setState({
//             errors: {
//               ...this.state.errors,
//               phoneno: '',
//             },
//           });
//         }
//       }
//     };

//     areAllFieldsValid = () => {
//       const { errors } = this.state;
//       return Object.values(errors).every(error => error === '');
//     };



//     handleFormSubmit = () => {
//       const { fullname, phoneno, email, errors } = this.state;

//       // Validate each field
//       this.validateFullName();
//       this.validatePhoneNo();
//       this.validateEmail();



//       if (this.areAllFieldsValid()) {
//         // Navigate to the next screen
//         this.props.navigation.navigate('Home');
//       } else {
//         // Display error messages
//         alert('Please fill in all required fields correctly.');
//       }
//     };



//   render() {
//     const { fullname, phoneno, email, errors } = this.state;
//     const { selectedFile } = this.state;
//     return (
//       <View style={styles.container}>
//         <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: 18 }}>Enter Your Information</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           onChangeText={text => this.setState({ fullname: text })}
//           onBlur={this.validateFullName}
//         />
//         <Text style={{ color: 'red' }}>{errors.fullname}</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           keyboardType="email-address"
//           onChangeText={text => this.setState({ email: text })}
//           onBlur={this.validateEmail}
//         />
//         <Text style={{ color: 'red' }}>{errors.email}</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"

//           keyboardType="phone-pad"
//           maxLength={10}
//           onChangeText={text => this.setState({ phoneno: text })}
//           onBlur={this.validatePhoneNo}
//         />
//         <Text style={{ color: 'red' }}>{errors.phoneno}</Text>

//         {/* <TextInput
//           style={styles.input}
//           placeholder="DOB"
//           onChangeText={(text) => this.setState({ dateOfBirth: text })}
//           keyboardType="numeric"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Address"
//           onChangeText={(text) => this.setState({ address: text })}
//           multiline={true}
//         /> */}
//         <View style={styles.choosefile}>
//           <TouchableOpacity onPress={this.handleFilePick}>
//             <View style={styles.selectfile}>
//               <Text>Select File</Text>
//             </View>
//           </TouchableOpacity>
//           {selectedFile ? (
//             <View>
//               <Text>Selected File: {selectedFile.name}</Text>
//               <Text>File Size: {selectedFile.size} bytes</Text>
//             </View>
//           ) : (
//             <Text>No file selected</Text>
//           )}
//         </View>


//         <TouchableOpacity style={styles.button} onPress={this.handleFormSubmit}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingTop: 50

//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5
//   },
//   errorText: {
//     color: 'red',
//     // marginBottom: 5,
//   },
//   choosefile: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5
//   },
//   selectfile: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 5,

//     borderRadius: 5

//   },
//   button: {
//     backgroundColor: '#5B7586',
//     height: 50,
//     paddingTop: 10,
//     marginTop: 25,
//     borderRadius: 4,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Signup;



import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      phoneno: '',
      dob: '',
      address: '',
      file: null,
      errors: {
        fullname: '',
        email: '',
        phoneno: '',
        dob: '',
        address: '',
        file: '',
      },
      formData: {
        fullname: '',
        email: '',
        phoneno: '',
        dob: '',
        address: '',
        file: '',
      },
    };
  }

  //Api
  handleInputChange = (field, value) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [field]: value,
      },
    }));
  };

  handleSignUp = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace with your API endpoint

    const { formData } = this.state;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if required
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log('Response data:', data);
        // Redirect to another screen or perform other actions upon successful signup
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  };


  handleFilePick = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      this.setState({
        selectedFile: result,
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };


  validateFullName = () => {
    const { fullname } = this.state;
    if (!fullname.trim()) {
      this.setState({
        errors: {
          ...this.state.errors,
          fullname: 'Please enter your full name',
        },
      });
      return false;
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          fullname: '',
        },
      });
      return true;
    }
  };

  validateEmail = () => {
    const { email } = this.state;
    if (!email.trim()) {
      this.setState({
        errors: {
          ...this.state.errors,
          email: 'Please enter your email address',
        },
      });
      return false;
    } else {
      // Email validation logic
      const validEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!validEmailPattern.test(email)) {
        this.setState({
          errors: {
            ...this.state.errors,
            email: 'Please enter a valid email address',
          },
        });
        return false;
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            email: '',
          },
        });
        return true;
      }
    }
  };

  validatePhoneNo = () => {
    const { phoneno } = this.state;
    if (!phoneno.trim()) {
      this.setState({
        errors: {
          ...this.state.errors,
          phoneno: 'Please enter your phone number',
        },
      });
      return false;
    } else {
      // Phone number validation logic
      const validPhonePattern = /^[0-9]{10}$/;
      if (!validPhonePattern.test(phoneno)) {
        this.setState({
          errors: {
            ...this.state.errors,
            phoneno: 'Please enter a valid phone number',
          },
        });
        return false;
      } else {
        this.setState({
          errors: {
            ...this.state.errors,
            phoneno: '',
          },
        });
        return true;
      }
    }
  };

  validateDOB = () => {
    const { dob } = this.state;
    if (!dob.trim()) {
      this.setState({
        errors: {
          ...this.state.errors,
          dob: 'Please enter your date of birth',
        },
      });
      return false;
    } else {
      // DOB validation logic
      // You can implement more specific validation here if needed
      this.setState({
        errors: {
          ...this.state.errors,
          dob: '',
        },
      });
      return true;
    }
  };
  validateAddress = () => {
    const { address } = this.state;
    if (!address.trim()) {
      this.setState({
        errors: {
          ...this.state.errors,
          address: 'Please enter your address',
        },
      });
      return false;
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          address: '',
        },
      });
      return true;
    }
  };
  handleFileUpload = file => {
    // Handle file upload logic here
    this.setState({ file });
  };

  areAllFieldsValid = () => {
    const { errors } = this.state;
    return Object.values(errors).every(error => error === '');
  };

  handleFormSubmit = () => {
    const isFullNameValid = this.validateFullName();
    const isEmailValid = this.validateEmail();
    const isPhoneNoValid = this.validatePhoneNo();
    const isDOBValid = this.validateDOB();
    const isAddressValid = this.validateAddress();

    if (isFullNameValid && isEmailValid && isPhoneNoValid && isDOBValid && isAddressValid) {
      this.props.navigation.navigate('Home');
    } else {
      Alert.alert('Validation Error', 'Please fill in all required fields correctly.');
    }
  };

  render() {
    const { fullname, email, phoneno, dob, address, errors } = this.state;
    const { selectedFile } = this.state;
    const { formData } = this.state;

    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Enter Your Information</Text>

        <TextInput
          placeholder="Full Name"
          value={fullname}
          onChangeText={text => this.setState({ fullname: text })}
          // value={formData.fullname}
          // onChangeText={(text) => this.handleInputChange('fullname', text)}
          onBlur={this.validateFullName}
          style={styles.input}
        />
        <Text style={styles.errorText}>{errors.fullname}</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => this.setState({ email: text })}
          // value={formData.email}
          // onChangeText={(text) => this.handleInputChange('email', text)}
          onBlur={this.validateEmail}
          style={styles.input}
        />
        <Text style={styles.errorText}>{errors.email}</Text>

        <TextInput
          placeholder="Phone Number"
          value={phoneno}
          onChangeText={text => this.setState({ phoneno: text })}
          // value={formData.phoneno}
          // onChangeText={(text) => this.handleInputChange('phoneno', text)}
          onBlur={this.validatePhoneNo}
          keyboardType="numeric"
          maxLength={10}
          style={styles.input}
        />
        <Text style={styles.errorText}>{errors.phoneno}</Text>

        <TextInput
          placeholder="Date of Birth"
          value={dob}
          onChangeText={text => this.setState({ dob: text })}
          // value={formData.dob}
          // onChangeText={(text) => this.handleInputChange('dob', text)}
          onBlur={this.validateDOB}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.errorText}>{errors.dob}</Text>


        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={text => this.setState({ address: text })}
          // value={formData.address}
          // onChangeText={(text) => this.handleInputChange('address', text)}
          onBlur={this.validateAddress}
          style={styles.input}
        />
        <Text style={styles.errorText}>{errors.address}</Text>

        <View style={styles.choosefile}>
          <TouchableOpacity onPress={this.handleFilePick}>
            <View style={styles.selectfile}>
              <Text>Select File</Text>
            </View>
          </TouchableOpacity>
          {selectedFile ? (
            <View>
              <Text>Selected File: {selectedFile.name}</Text>
              <Text>File Size: {selectedFile.size} bytes</Text>
            </View>
          ) : (
            <Text>No file selected</Text>
          )}
        </View>


        <View>
          <TouchableOpacity style={styles.button} onPress={this.handleFormSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  choosefile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5
  },
  selectfile: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5

  },
  button: {
    backgroundColor: '#5B7586',
    height: 50,
    paddingTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default Signup;