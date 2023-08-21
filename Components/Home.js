import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Ionicons } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      selectedDate: new Date(),
      showPicker: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 60000); // Update every minute
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
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
      console.error("Error opening settings:", error);
    }
  };


  render() {
    //for time
    const formattedTime = this.formatTime(this.state.currentTime);
    const { selectedDate, showPicker } = this.state;
    const { navigation } = this.props;

    return (
      <>
      
        <View style={styles.container}>
          <Text style={styles.text}>Hello</Text>
          <View style={styles.iconsContainer}>
            <Ionicons
              name="search"
              size={30}
              color="black"
              style={styles.icon}
            />
            <Ionicons
              name="notifications-outline"
              size={30}
              color="black"
              style={styles.icon}
            />
            <AntDesign
              name="contacts"
              size={30}
              color="black"
              style={styles.icon}
            />
          </View>
        </View>
      
        <ScrollView
                        Vertical={true}
                        showsVerticalScrollIndicator={false}
                    >
        
          <View style={styles.Section}>

            <View style={{ height: 110, width: 175, backgroundColor: "#D3D3D3" }}>
              <Text style={styles.text1}>Rainy Wash Offer</Text>
              <Text style={{ color: "blue", marginHorizontal: 20 }}>50% off</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Book Now</Text>
              </TouchableOpacity>
            </View>

            <Image
              style={styles.img}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />

          </View>

          <Text style={styles.text3}>Services</Text>

          <View style={styles.icon1}>
            <View
              style={{
                height: 50,
                width: 160,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <View style={styles.icon3}>
                <MaterialIcons
                  name="local-car-wash"
                  size={40}
                  color="black"
                  backgroundColor="#a9a9a9"
                  margin={4}
                />
                <Text style={styles.wash}>Wash</Text>
              </View>
            </View>

            <View
              style={{
                height: 50,
                width: 160,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <View style={styles.icon3}>
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={40}
                  color="black"
                  backgroundColor="#a9a9a9"
                  margin={4}
                />
                <Text style={styles.wash}>Detailing</Text>
              </View>
            </View>
          </View>

          <View style={styles.icon2}>
            <View
              style={{
                height: 50,
                width: 160,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <View style={styles.icon3}>
                <MaterialIcons
                  name="cleaning-services"
                  size={40}
                  color="black"
                  backgroundColor="#a9a9a9"
                  margin={4}
                />
                <Text style={styles.wash}>Cleaning</Text>
              </View>
            </View>
            <View
              style={{
                height: 50,
                width: 160,
                backgroundColor: "white",
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <View style={styles.icon3}>
                <Ionicons
                  name="car-sharp"
                  size={40}
                  color="black"
                  backgroundColor="#a9a9a9"
                  margin={4}
                />
                <Text style={styles.wash}>Polish</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text4}>Upcoming Booking</Text>
          <View
            style={{
              height: 100,
              width: 350,
              backgroundColor: "#D3D3D3",
              marginHorizontal: 20,
            }}
          >
            <View style={styles.booking}>
              <Ionicons name="car-sharp" size={40} color="black" margin={4} />
              <Text style={styles.carwash}>Car Wash:car 1</Text>
              <TouchableOpacity style={styles.btn3}>
                <Text style={styles.btntext}>Pending</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.clocktime}>
              <View style={styles.clock}>
                <EvilIcons name="clock" size={24} color="black" />
                <Text>{formattedTime}</Text>
              </View>

              <View style={styles.time}>
                <TouchableOpacity
                  onPress={() => this.setState({ showPicker: true })}
                >
                  <AntDesign name="calendar" size={24} color="black" />
                </TouchableOpacity>
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
          <View style={styles.promotion1}>
            <Text style={styles.text5}>Promotions</Text>

            <TouchableOpacity style={styles.text6}>
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.promotion2}
            showsHorizontalScrollIndicator={false}
          >
            <Image source={require("./Images/car1.jpg")} style={styles.item} />
            <Image source={require("./Images/car2.jpg")} style={styles.item} />
            <Image source={require("./Images/car3.jpg")} style={styles.item} />
            <Image source={require("./Images/car3.jpg")} style={styles.item} />
          </ScrollView>
          <View style={styles.topservice1}>
            <Text style={styles.text7}>Top Services</Text>

            <TouchableOpacity style={styles.text8}>
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            style={styles.topservice2}
            showsHorizontalScrollIndicator={false}
          >
            <Image source={require("./Images/car1.jpg")} style={styles.item1} />
            <Image source={require("./Images/car2.jpg")} style={styles.item1} />
            <Image source={require("./Images/car3.jpg")} style={styles.item1} />
            <Image source={require("./Images/car1.jpg")} style={styles.item1} />
          </ScrollView>
          </ScrollView>
          
        
       
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
              <Ionicons name="settings-sharp" size={30} style={styles.icon4} />
            </TouchableOpacity>

            <Text style={styles.text10}>Setting</Text>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  flex:{
    marginHorizontal:20,
    marginVertical:10,

  },
  text: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal:10,
    paddingTop: 35,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 15,
  },
  Section: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
  },
  text1: {
    fontSize: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    width: 100,
    height: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 5,
  },
  img: {
    height: 110,
    width: 175,

  },
  text3: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  icon1: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  icon2: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  icon3: {
    flexDirection: "row",
  },
  wash: {
    fontSize: 15,
    margin: 10,
  },
  text4: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  booking: {
    flexDirection: "row",
    margin: 3,
  },
  carwash: {
    marginTop: 15,
  },
  btn3: {
    backgroundColor: "white",
    marginLeft: 100,
    marginTop: 5,
    borderRadius: 20,
    width: 80,
    height: 30,
  },
  btntext: {
    textAlign: "center",
    margin: 4,
  },
  clocktime: {
    flexDirection: "row",
    margin: 15,
    justifyContent: "space-between",
  },
  clock: {
    flexDirection: "row",
  },
  time: {
    flexDirection: "row",
  },
  promotion1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text5: {
    fontWeight: "bold",
    fontSize: 15,
  },
  promotion2: {
    marginHorizontal: 20,
  },
  item: {
    height: 90,
    width: 160,
    marginRight: 20,
  },
  topservice1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text7: {
    fontWeight: "bold",
    fontSize: 15,
  },
  topservice2: {
    marginHorizontal: 20,
  },
  item1: {
    height: 70,
    width: 100,
    marginRight: 20,
  },
  iconsContainer1: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 60,
    marginVertical: 5,
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
export default Home;
