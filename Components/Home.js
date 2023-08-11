import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    DatePickerAndroid

} from 'react-native'
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

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
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;  // Convert to 12-hour format
        return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    };
    //for date
    handleDateChange = (event, selectedDate) => {
        if (selectedDate !== undefined) {
            this.setState({
                selectedDate,
                showPicker: false,
            });
        }
    };
    render() {
        //for time
        const formattedTime = this.formatTime(this.state.currentTime);
        const { selectedDate, showPicker } = this.state;
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.text}>Hello</Text>
                    <View style={styles.iconsContainer}>
                        <Ionicons name="search" size={30} color="black" style={styles.icon} />
                        <Ionicons name="notifications-outline" size={30} color="black" style={styles.icon} />
                        <AntDesign name="contacts" size={30} color="black" style={styles.icon} />
                    </View>
                </View >
                <View style={styles.flex}>
                    <View style={{ height: 140, width: 175, backgroundColor: '#D3D3D3' }}>
                        <Text style={styles.text1}>Rainy Wash Offer</Text>
                        <Text style={{ color: 'blue', marginHorizontal: 20 }}>50% off</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 140, width: 175, backgroundColor: '#D3D3D3' }}></View>

                </View >

                <Text style={styles.text3}>Services</Text>

                <View style={styles.icon1}>

                    <View style={{ height: 60, width: 160, backgroundColor: 'white', borderColor: 'black', borderWidth: 1 }}>
                        <View style={styles.icon3}>
                            <MaterialIcons name="local-car-wash" size={48} color="black" backgroundColor="#a9a9a9" margin={5} />
                            <Text style={styles.wash}>Wash</Text>
                        </View>
                    </View>

                    <View style={{ height: 60, width: 160, backgroundColor: 'white', borderColor: 'black', borderWidth: 1 }}>
                        <View style={styles.icon3}>
                            <MaterialCommunityIcons name="card-account-details-outline" size={48} color="black" backgroundColor="#a9a9a9" margin={5} />
                            <Text style={styles.wash}>Detailing</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.icon2}>
                    <View style={{ height: 60, width: 160, backgroundColor: 'white', borderColor: 'black', borderWidth: 1 }}>
                        <View style={styles.icon3}>
                            <MaterialIcons name="cleaning-services" size={48} color="black" backgroundColor="#a9a9a9" margin={5} />
                            <Text style={styles.wash}>Cleaning</Text>
                        </View>
                    </View>
                    <View style={{ height: 60, width: 160, backgroundColor: 'white', borderColor: 'black', borderWidth: 1 }}>
                        <View style={styles.icon3}>
                            <Ionicons name="car-sharp" size={48} color="black" backgroundColor="#a9a9a9" margin={5} />
                            <Text style={styles.wash}>Polish</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.text4}>Upcoming Booking</Text>
                <View style={{ height: 110, width: 350, backgroundColor: '#D3D3D3', marginHorizontal: 20 }}>
                    <View style={styles.booking}>
                        <Ionicons name="car-sharp" size={48} color="black" margin={5} />
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
                            <TouchableOpacity onPress={() => this.setState({ showPicker: true })}>
                                {/* <Text>Select Date</Text> */}
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


            </>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        marginHorizontal: 25,
        fontWeight: 'bold',
        fontSize: 20,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingTop: 35,

    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 15,
    },
    flex: {
        marginHorizontal: 20,
        marginVertical: 15,
        flexDirection: 'row',

    },
    text1: {
        fontSize: 15,
        marginHorizontal: 20,
        marginTop: 30,
    },
    button: {
        width: 100,
        height: 35,
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: 'white',

    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 5
    },
    text3: {
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 20,

    },
    icon1: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginVertical: 15

    },
    icon2: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    icon3: {
        flexDirection: 'row'
    },
    wash: {
        fontSize: 16,
        margin: 15
    },
    text4: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },

    booking: {
        flexDirection: 'row',
        // justifyContent:'space-between',
        margin: 3
    },
    carwash:{
        marginTop:15

    },
    btn3: {
        backgroundColor: 'white',
        marginLeft: 100,
        marginTop:5,
        borderRadius: 20,
        width: 80,
        height: 30,
    },
    btntext: {
        textAlign: 'center',
        margin: 4,
    },
    clocktime: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    clock:{
        flexDirection:'row'
    },
    time:{
        flexDirection:'row'
    }
});
export default Home;
