import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TextInput,
  ScrollView
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";



class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      showPicker: false,
      isDatePickerVisible: false,
      selectedTime: new Date(),
    };
  }
  //for time
  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleDateConfirm = date => {
    this.setState({
      selectedTime: date,
    });
    this.hideDatePicker();
  };

  formatTime = time => {
    if (!time) return '';
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, }).toUpperCase();
  };

  //for date
  handleDateChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      this.setState({
        selectedDate,
        showPicker: false,
        searchText: "",
        isSearching: false,
      });
    }
  };
  //for confirm Booking 
  handleIconPressConfirm = () => {
    this.props.navigation.navigate('Confirm'); // Navigate to the Washing screen
  };
  //for home
  handleIconPressHome = () => {
    this.props.navigation.navigate('Home'); // Navigate to the home screen
  };
  //for washing itself page
  handleIconPressBooking = () => {
    this.props.navigation.navigate('Washing'); // Navigate to the Washing screen
  };
  //inbox page
  handleIconPressInbox = () => {
    this.props.navigation.navigate('Confirmation'); // Navigate to the Confirmation page screen
  };
  //for  setting
  openSettings = async () => {
    try {
      await Linking.openSettings();
    } catch (error) {
      console.error('Error opening settings:', error);
    }
  };


  render() {
    const { selectedDate, showPicker } = this.state;
    const { selectedTime, isDatePickerVisible } = this.state;
    return (
      <>
       <ScrollView
                        Vertical={true}
                        showsVerticalScrollIndicator={false}
                    >

        <View style={styles.container}>
          {/* <Text style={styles.text}>Confirmation</Text> */}
          <View
            style={{
              height: 65,
              width: 370,
              backgroundColor: "#F2F3F4",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                margin:10,
                justifyContent:'space-between'
              }}
            >
              <MaterialCommunityIcons name="car-wash" size={35} color="black" />

              <Text>Service</Text>
              <Text>1500</Text>
            </View>
          </View>
          <View
            style={{
              height: 65,
              width: 370,
              backgroundColor: "#F2F3F4",
              marginVertical: 10,
            }}
          >
            <View style={{ flexDirection: 'row',margin:10 }}>
              <TouchableOpacity
                onPress={() => this.setState({ showPicker: true })}
              >
                <AntDesign name="calendar" size={35} color="black"/>
              </TouchableOpacity>
              <View style={{marginLeft:15}}>
              <Text> Date & Time</Text>

            <View style={styles.date1}>

              <TouchableOpacity onPress={this.showDatePicker}>
                <EvilIcons name="clock" size={22} color="black" />
              </TouchableOpacity>

              {selectedTime && (
                <Text>{(this.formatTime(selectedTime)) || "8:30"}</Text>
              )}
              
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={this.handleDateConfirm}
                onCancel={this.hideDatePicker}
              />
              <Text>  |  </Text>
              {showPicker && (
                <DateTimePicker
                  value={selectedDate}
                  mode="date"
                  display="default"
                  onChange={this.handleDateChange}
                />
              )}
              {selectedDate && (
                <Text> {selectedDate.toLocaleDateString()}</Text>
              )}
              </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 65,
              width: 370,
              backgroundColor: "#F2F3F4",
              
              marginVertical: 10,
            }}
          >
            <View style={{flexDirection:'row'}}>
            <AntDesign name="exclamationcircle" size={30} color="black" margin={10}/>
            <View style={{marginLeft:10,marginTop:5}}>
            <Text>Note</Text>
            <Text>Ipsum Velt ut null null temp</Text>
            </View>
            </View>
          </View>
          <Text>Select Pickup</Text>
          <View
            style={{
              height: 70,
              width: 370,
              backgroundColor: "#F2F3F4",
              marginVertical: 10,
            }}
          >
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
              <View>
            <Text>Pickup address</Text>
            <Text>PIN Text Address</Text>
            </View>
            <MaterialCommunityIcons name="greater-than" size={24} color="black" paddingTop={10}/>
            </View>
            
          </View>
          <Text>Voucher</Text>
          <View style={styles.voucher1}>
            <TextInput
              style={styles.text1}
              placeholder="Enter Voucher Code"
            ></TextInput>
            <TouchableOpacity style={styles.apply}>
              <Text style={{ textAlign: "center", margin: 10 }}>Apply</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.amount}>
            <Text style={styles.text2}>TOTAL</Text>
            <Text style={styles.text2}>1500</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.text2}>PICK UP</Text>
            <Text style={styles.text2}>300</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.text2}>TAXES</Text>
            <Text style={styles.text2}>150</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.text2}>TOTAL PAYABLE AMOUNT</Text>
            <Text style={styles.text2}>1950</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.text2}>TOTAL PAYABLE </Text>
            <Text style={styles.text2}>1950</Text>
          </View>
          </View>

          </ScrollView>
          <View style={styles.container}>

          <TouchableOpacity style={styles.button} onPress={this.handleIconPressConfirm}>
            <Text style={styles.buttonText}>Confirm Booking</Text>
          </TouchableOpacity>
           </View>

           <View style={styles.footer}>

          <View style={styles.iconsContainer1}>
            <View style={styles.text9}>
              <TouchableOpacity onPress={this.handleIconPressHome}>
                <Entypo name="home" size={30} style={styles.icon4} />
              </TouchableOpacity>
              <Text style={styles.text10}>Home</Text>
            </View>

            <View style={styles.text9}>
              <TouchableOpacity onPress={this.handleIconPressBooking}>
                <Entypo name="calendar" size={30} style={styles.icon4} />
              </TouchableOpacity>
              <Text style={styles.text10}>Booking</Text>
            </View>

            <View style={styles.text9}>
              <TouchableOpacity onPress={this.handleIconPressInbox}>
                <MaterialIcons
                  name="forward-to-inbox"
                  size={30}
                  style={styles.icon4}
                />
              </TouchableOpacity>
              <Text style={styles.text10}>Inbox</Text>
            </View>

            <View style={styles.text9}>
              <TouchableOpacity onPress={this.openSettings}>
                <Ionicons
                  name="settings-sharp"
                  size={30}
                  style={styles.icon4}
                />
              </TouchableOpacity>

              <Text style={styles.text10}>Setting</Text>
            </View>
          </View>
          </View>
       
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  text1: {
    height: 45,
    width: 250,
    borderWidth: 2,
    borderColor: "grey",
    paddingLeft: 15,
  },
  date1: {
    flexDirection: 'row',
    
  },
  voucher1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  apply: {
    height: 45,
    width: 100,
    borderWidth: 2,
    borderColor: "grey",
    backgroundColor: "yellow",
  },

  amount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  text2: {
    fontWeight: "bold",
    fontSize: 13,
  },
  button: {
    backgroundColor: "#5B7586",
    height: 50,
    width: 370,
    paddingTop: 10,

    marginTop: 15,
    borderRadius: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: 4,
  },
  // iconsContainer1: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   marginVertical: 20,
  // },
  // icon4: {
  //   marginHorizontal: 20,
  // },
  // text9: {
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // text10: {
  //   fontSize: 10,
  // },
  footer:{
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 5,
    alignItems: 'center',
},

iconsContainer1: {
    flexDirection: 'row', 
},
icon4: {
    marginHorizontal: 20,
},
text9: {
    alignItems: 'center',
},
text10: {
    fontSize: 10,
}
});
export default Confirmation;
