import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  TextInput,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons";

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
        <View style={styles.container}>
          {/* <Text style={styles.text}>Confirmation</Text> */}
          <View
            style={{
              height: 70,
              width: 370,
              backgroundColor: "#F2F3F4",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 18,
              }}
            >
              <MaterialCommunityIcons name="car-wash" size={35} color="black" />

              <Text style={{ marginLeft: 20 }}>Service</Text>
              <Text style={{ marginLeft: 220 }}>1500</Text>
            </View>
          </View>
          <View
            style={{
              height: 70,
              width: 370,
              backgroundColor: "#F2F3F4",
              marginVertical: 10,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text>Date & Time</Text>
              <TouchableOpacity
                onPress={() => this.setState({ showPicker: true })}
              >
                <AntDesign name="calendar" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={this.showDatePicker}>
                <EvilIcons name="clock" size={24} color="black" />
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
            </View>

            <View>
              {/* <TouchableOpacity
                onPress={() => this.setState({ showPicker: true })}
              >
                <AntDesign name="calendar" size={24} color="black" />
              </TouchableOpacity> */}
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
          <View
            style={{
              height: 70,
              width: 370,
              backgroundColor: "#F2F3F4",

              marginVertical: 10,
            }}
          ></View>
          <Text>Select Pickup</Text>
          <View
            style={{
              height: 70,
              width: 370,
              backgroundColor: "#F2F3F4",
              marginVertical: 10,
            }}
          ></View>
          <Text>Voucher</Text>
          <View style={styles.voucher1}>
            <TextInput
              style={styles.text1}
              placeholder="Enter Phone Number"
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
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Confirm Booking</Text>
          </TouchableOpacity>
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
  iconsContainer1: {
    flexDirection: "row",
    // alignItems: 'center',
    justifyContent: "center",
    marginVertical: 20,
  },
  icon4: {
    marginHorizontal: 20,
  },
  text9: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  text10: {
    fontSize: 10,
  },
});
export default Confirmation;
