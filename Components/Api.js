// import React from "react";
// import {
//     View,
//     Text,
//     FlatList,

// } from "react-native";

// class Api extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             data: [],
//         }
//     }
//     componentDidMount() {
//         //    this.callApi();
//         const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//         fetch(apiUrl)
//             .then((response) => response.json())
//             .then((data) => {
//                 this.setState({ data }); // Set the API data in the component's state
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }

//     // async callApi()
//     // {
//     //     let resp =await fetch("http://localhost:9000/api/promotions");
//     //     let respJson=await resp.json();
//     //     this.setState({data:respJson});

//     // }


//     render() {
//         // console.warn("render",this.state.data)
//         const { data } = this.state;
//         return (
//             <>
//                 <View>
//                     <Text style={{ fontSize: 50 }}>Api call</Text>
//                     {/* <FlatList 
//                 data={this.state.data}
//                 renderItem={({item})=><Text style={{fontSize:20, margin:10,backgroundColor:'skyblue'}}>{item.title}</Text>}
//                 ></FlatList> */}
//                     <FlatList
//                         data={data} // Use the API data as the data source for FlatList
//                         //   keyExtractor={(item) => item.id.toString()} // Use a unique key for each item
//                         renderItem={({ item }) => (
//                             <View>
//                                 <Text>service: {item.email}</Text>
//                                 {/* <Text>title: {item.name}</Text> */}
//                             </View>
//                         )}
//                     />
//                 </View>
//             </>
//         )
//     }
// }
// export default Api;



import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        userId: '',
        id: '',
        title: '',
        body: '',
        // Add more form fields as needed
      },
    };
  }

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

  render() {
    const { formData } = this.state;

    return (
      <View>
        <TextInput
          placeholder="Name"
          value={formData.userId}
          onChangeText={(text) => this.handleInputChange('userId', text)}
        />
        <TextInput
          placeholder="Email"
          value={formData.id}
          onChangeText={(text) => this.handleInputChange('id', text)}
        />
        <TextInput
          placeholder="Phone"
          value={formData.title}
          onChangeText={(text) => this.handleInputChange('title', text)}
        />
        <TextInput
          placeholder="Date of Birth"
          value={formData.body}
          onChangeText={(text) => this.handleInputChange('body', text)}
        />
        {/* Add more TextInput components for additional form fields */}
        <Button title="Sign Up" onPress={this.handleSignUp}/>
      </View>
    );
  }
}

export default Api;
