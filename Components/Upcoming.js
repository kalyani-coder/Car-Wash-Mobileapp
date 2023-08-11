import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,

} from 'react-native'
import moment from 'moment';



import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


class Upcoming extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date(), //for time

            //for button 
            isButton1Pressed: false,
            isButton2Pressed: false,
            isButton3Pressed: false,
            isButton4Pressed: false,
            isButton5Pressed: false,
            isButton6Pressed: false,
        };
    }
    //for time

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
    onDayPress = (day) => {
        this.setState({
            selectedDate: day.dateString,
        });
    };

    //for button

    handleButtonPress = (buttonName) => {
        this.setState({
            isButton1Pressed: buttonName === 'button1',
            isButton2Pressed: buttonName === 'button2',
            isButton3Pressed: buttonName === 'button3',
            isButton4Pressed: buttonName === 'button4',
            isButton5Pressed: buttonName === 'button5',
            isButton6Pressed: buttonName === 'button6',
        });
    };
    render() {

        //for time
        const formattedTime = this.formatTime(this.state.currentTime);
        const { isButton1Pressed, isButton2Pressed, isButton3Pressed, isButton4Pressed, isButton5Pressed, isButton6Pressed } = this.state;
        // for date
        const currentDate = moment();
        const formattedDate = currentDate.format('D MMM');
        //for booking icon
        const { navigation } = this.props;

        return (
            <>
                <Text>Tomorrow</Text>
                <View style={styles.flex}>
                    <View style={{ height: 180, width: 380, backgroundColor: '#E5E5E5',borderWidth:2,borderColor:'white' }}>
                        <View style={styles.wash}>
                            <TouchableOpacity style={styles.date}>
                                <Text style={styles.datetext}>{formattedDate}</Text>
                            </TouchableOpacity>
                            <Text>Wash</Text>
                            <TouchableOpacity style={styles.btn3}>
                                <Text style={styles.btntext}>Confirmed</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.clock}>
                            <EvilIcons name="clock" size={24} color="black" />
                            <Text>{formattedTime}</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => this.handleButtonPress('button1')}
                                style={[
                                    styles.btn1,
                                    { backgroundColor: isButton1Pressed ? 'grey' : 'white' },
                                ]}
                                underlayColor="grey">
                                <Text style={styles.buttontext}>Reschedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleButtonPress('button2')}
                                style={[
                                    styles.btn2,
                                    { backgroundColor: isButton2Pressed ? 'grey' : 'white' },
                                ]}
                                underlayColor="grey">
                                <Text style={styles.buttontext}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 180, width: 380, backgroundColor: '#E5E5E5',borderWidth:2,borderColor:'white' }}>
                        <View style={styles.wash}>
                            <TouchableOpacity style={styles.date}>
                                <Text style={styles.datetext}>{formattedDate}</Text>
                            </TouchableOpacity>
                            <Text>Detailing</Text>
                            <TouchableOpacity style={styles.btn3}>
                                <Text style={styles.btntext}>Pending</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.clock}>
                            <EvilIcons name="clock" size={24} color="black" />
                            <Text>{formattedTime}</Text>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => this.handleButtonPress('button3')}
                                style={[
                                    styles.btn1,
                                    { backgroundColor: isButton3Pressed ? 'grey' : 'white' },
                                ]}
                                underlayColor="grey">
                                <Text style={styles.buttontext}>Reschedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleButtonPress('button4')}
                                style={[
                                    styles.btn2,
                                    { backgroundColor: isButton4Pressed ? 'grey' : 'white' },
                                ]}
                                underlayColor="grey">
                                <Text style={styles.buttontext}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ height: 180, width: 380, backgroundColor: '#E5E5E5' ,borderWidth:2,borderColor:'white'}}>
                        <View style={styles.wash}>
                            <TouchableOpacity style={styles.date}>
                                <Text style={styles.datetext}>{formattedDate}</Text>
                            </TouchableOpacity>
                            <Text>Meeting Title</Text>
                            <TouchableOpacity style={styles.btn3}>
                                <Text style={styles.btntext}>Pending</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.clock}>
                            <EvilIcons name="clock" size={24} color="black" />
                            <Text>{formattedTime}</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => this.handleButtonPress('button5')}
                                style={[
                                    styles.btn1,
                                    { backgroundColor: isButton5Pressed ? 'grey' : 'white' },
                                ]}
                                underlayColor="grey">
                                <Text style={styles.buttontext}>Reschedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handleButtonPress('button6')}
                                style={[
                                    styles.btn2,
                                    { backgroundColor: isButton6Pressed ? 'grey' : 'white' },
                                ]}
                                underlayColor="grey">
                                <Text style={styles.buttontext}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >
                <View style={styles.add}>
                    <AntDesign name="plus" size={20} color="black" />
                    <Text>Add New Booking</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <Entypo name="home" size={30} style={styles.icon} />
                   
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Entypo name="calendar" size={30} style={styles.icon} />
                    </TouchableOpacity>

                    <MaterialIcons name="forward-to-inbox" size={30} style={styles.icon} />
                    <Ionicons name="settings-sharp" size={30} style={styles.icon} />
                    
                </View>
                <View style={styles.text4}>
                <Text style={styles.text5}>Home</Text>
                <Text style={styles.text5}>Booking</Text>
                <Text style={styles.text5}>Inbox</Text>
                <Text style={styles.text5}>Setting</Text>
                </View>




            </>
        );
    }
}
const styles = StyleSheet.create({

    flex: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginHorizontal: 5,
        marginVertical: 15
    },
    add: {
        flexDirection: 'row',
        marginHorizontal: 120,
        marginVertical: 10

    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 55

    },
    icon: {
        marginHorizontal: 20,
    },
    wash: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15
    },
    date: {
        height: 70,
        width: 55,
        backgroundColor: '#D3d3d3',
    },
    datetext: {
        fontSize: 15,
        textAlign: 'center',
        margin: 8


    },
    btn3: {
        backgroundColor: '#D3d3d3',
        borderRadius: 20,
        width: 80,
        height: 30,
    },
    btntext: {
        textAlign: 'center',
        margin: 4,

    },
    clock: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        marginBottom: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    btn1: {
        width: 160,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
    },
    btn2: {
        width: 160,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
    },
    buttontext: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
        margin: 8
    },
    text4:{
        flexDirection:'row',
        justifyContent:'space-between',
        
        alignItems: 'center',
        marginHorizontal: 75

    },
    text5:{
        fontSize:10,
    }



})

export default Upcoming; 
