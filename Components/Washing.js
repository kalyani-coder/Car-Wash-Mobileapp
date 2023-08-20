
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking

} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



class Washing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            selectedTimes: Array(3).fill(null), // Initialize an array to store selected times
            activePicker: null, // To track the active picker index
           
        };
    }


    showDateTimePicker = (index) => {
        this.setState({ isDateTimePickerVisible: true, activePicker: index });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false, activePicker: null });
    };

    handleDateTimeConfirm = (datetime) => {
        const { activePicker } = this.state;
        if (activePicker !== null) {
            const updatedSelectedTimes = [...this.state.selectedTimes];
            updatedSelectedTimes[activePicker] = datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            this.setState({
                selectedTimes: updatedSelectedTimes,
                isDateTimePickerVisible: false,
                activePicker: null,
            });
        }
    };
  
    //for date
    onDayPress = (day) => {
        this.setState({
            selectedDate: day.dateString,
        });
    };
    //map link
    openMapLink = () => {
        const { latitude, longitude } = this.props;
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        Linking.openURL(mapUrl);
    };
    
    //for stars
    state = {
        selectedStars: 0,
    };
    handleStarPress = (rating) => {
        this.setState({ selectedStars: rating });
    };
    //for home
    handleIconPress = () => {
        this.props.navigation.navigate('Home'); // Navigate to the home screen
    };
    //for washing itself page
    handleIconPress1 = () => {
        this.props.navigation.navigate('Washing'); // Navigate to the home screen
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
        // for date
        const currentDate = moment();
        const formattedDate = currentDate.format('D MMM');

        const { selectedStars } = this.state;
        return (
            <>
                <View>

                    {/* <Text style={styles.text}>Washing</Text> */}

                    <View style={{ height: 120, width: 350, backgroundColor: '#F2F3F4', marginHorizontal: 20 }}>
                        <Text style={styles.text1}>Deep Wash</Text>
                    </View>

                    <View style={styles.about}>
                        <Text style={styles.text2}>About</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Neque esse omnis ut iusto dicta soluta impedit fugiat.</Text>
                    </View>

                    <View style={styles.reviewtext}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Reviews</Text>
                        <View style={styles.sees}>
                            <Text>See all</Text>
                            <MaterialCommunityIcons name="greater-than" size={17} />
                        </View>
                    </View>

                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ height: 150, width: 300, backgroundColor: '#F2F3F4', marginHorizontal: 20 }}>
                        <View style={styles.review}>
                            <View style={styles.icons}>
                                <AntDesign name="contacts" size={35} color="black" backgroundColor="white" margin={4} />

                                <Text style={styles.text3}>Mr Xyz</Text>
                                <View style={styles.icon}>


                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => this.handleStarPress(index)}
                                            style={styles.starContainer}
                                        >
                                            <Entypo
                                                name="star"
                                                size={20}
                                                color={index <= selectedStars ? 'yellow' : 'gray'}
                                            />

                                        </TouchableOpacity>
                                    ))}


                                </View>
                            </View>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore alias eum deserunt recusandae ex rerum qui rem.</Text>
                        </View>
                    </View>
                    <View style={{ height: 150, width: 300, backgroundColor: '#F2F3F4', marginHorizontal: 20 }}>
                        <View style={styles.review}>
                            <View style={styles.icons}>
                                <AntDesign name="contacts" size={35} color="black" backgroundColor="white" margin={4} />

                                <Text style={styles.text3}>Mr Xyz</Text>
                                <View style={styles.icon}>

                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => this.handleStarPress(index)}
                                            style={styles.starContainer}
                                        >
                                            <Entypo
                                                name="star"
                                                size={20}
                                                color={index <= selectedStars ? 'yellow' : 'gray'}
                                            />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore alias eum deserunt recusandae ex rerum qui rem.</Text>
                        </View>
                    </View>

                </ScrollView>

                <Text style={{ fontWeight: 'bold', marginHorizontal: 20, fontSize: 15, marginVertical: 10 }}>Glossgenic</Text>
          <View style={{ height: 50, width: 380, backgroundColor: '#F2F3F4', marginHorizontal: 20 }}>
                <View style={styles.gloss}>
                    <TouchableOpacity onPress={this.openMapLink}>
                        <FontAwesome name="map-marker" size={35} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15}}>Amanora Park Town 1284 ABC Address</Text>
                    <MaterialCommunityIcons name="greater-than" size={17} />
                </View>
                </View>

                <Text style={{ fontWeight: 'bold', marginHorizontal: 20, fontSize: 15, marginVertical: 10 }}>Choose Date</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.date}>
                        <Text style={styles.datetext}>{formattedDate}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.datetext}>{formattedDate}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.datetext}>{formattedDate}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.datetext}>{formattedDate}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.datetext}>{formattedDate}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.datetext}>{formattedDate}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.datetext}>{formattedDate}</Text>
                    </View>

                </ScrollView>
                <Text style={{ fontWeight: 'bold', marginHorizontal: 20, fontSize: 15, marginVertical: 5 }}>Choose time</Text>
                <View style={styles.time1}>
                    <View style={styles.date1}>
                        {this.state.selectedTimes.map((time, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => this.showDateTimePicker(index)}
                                style={styles.timePicker}
                            >
                                <Text style={styles.datetext1}>
                                    {time || '8:30'}
                                </Text>
                            </TouchableOpacity>
                        ))}
                        <DateTimePickerModal
                            isVisible={this.state.isDateTimePickerVisible}
                            mode="time"
                            is24Hour={true}
                            display="spinner"
                            onConfirm={this.handleDateTimeConfirm}
                            onCancel={this.hideDateTimePicker}
                        />
                    </View>
                </View >
                <View style={styles.timepicker}>
                    <DateTimePickerModal
                        isVisible={this.state.isDateTimePickerVisible}
                        mode="time"
                        is24Hour={true}
                        display="spinner"
                        onConfirm={this.handleDateTimeConfirm}
                        onCancel={this.hideDateTimePicker}

                    />
                </View>
                <View style={styles.iconsContainer1}>

                    <View style={styles.text9}>
                        <TouchableOpacity onPress={this.handleIconPress}>
                            <Entypo name="home" size={30} style={styles.icon4} />
                        </TouchableOpacity>
                        <Text style={styles.text10}>Home</Text>
                    </View>

                    <View style={styles.text9}>
                        <TouchableOpacity onPress={this.handleIconPress1}>
                            <Entypo name="calendar" size={30} style={styles.icon4} />
                        </TouchableOpacity>
                        <Text style={styles.text10}>Booking</Text>
                    </View>

                    <View style={styles.text9}>
                        <MaterialIcons name="forward-to-inbox" size={30} style={styles.icon4} />
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


    text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5
    },
    text1: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    about: {
        margin: 20,
    },
    reviewtext: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    sees: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text3: {
        fontWeight: 'bold',
    },
    icon: {
        flexDirection: 'row',

    },
    review: {
        margin: 5,
    },
    gloss: {
        paddingTop:10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        height: 60,
        width: 50,
        backgroundColor: '#F2F3F4',
        marginHorizontal: 10
    },
    datetext: {
        fontSize: 14,
        textAlign: 'center',
        margin: 8,
    },
    date1: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    datetext1: {
        height: 40,
        width: 90,
        backgroundColor: '#F2F3F4',
        fontSize: 18,
        textAlign: 'center',
        margin: 5,
        paddingTop: 8
    },


    iconsContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 60,
        marginVertical: 20
    },
    icon4: {
        marginHorizontal: 20,
    },
    text9: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text10: {
        fontSize: 10,
    }
})
export default Washing;