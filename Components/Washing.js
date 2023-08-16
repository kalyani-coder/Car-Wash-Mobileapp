
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    ScrollView,
    TouchableOpacity

} from 'react-native'
import moment from 'moment';


class Washing extends React.Component {
   
    //for date
    onDayPress = (day) => {
        this.setState({
          selectedDate: day.dateString,
        });
      };

    render() {
        // for date
        const currentDate = moment();
        const formattedDate = currentDate.format('D MMM'); 
        return (
            <>
                <View>
                    <Text style={styles.text1}>Washing</Text>
                    <Text style={styles.text2}>About</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque esse omnis ut iusto dicta soluta impedit fugiat.</Text>
                    <View style={styles.review}>
                        <Text >Reviews</Text>
                        <Text>See all</Text>
                    </View>

                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{ height: 170, width: 300, backgroundColor: '#D3D3D3', marginHorizontal: 20 }}>
                        <Text>Mr Xyz</Text>
                        <Text>A day ago</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore alias eum deserunt recusandae ex rerum qui rem.</Text>
                    </View>
                    <View style={{ height: 170, width: 300, backgroundColor: '#D3D3D3', marginHorizontal: 20 }}>
                        <Text>Mr Xyz</Text>
                        <Text>A day ago</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore alias eum deserunt recusandae ex rerum qui rem.</Text>
                    </View>
                </ScrollView>

                <Text>Glossgenic</Text>
                <Text>amanora Park Town 1284 ABC Address</Text>
                <Text>Choose Date</Text>
                <View style={styles.dateday}>
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
            
                </View>
                {/* <TouchableOpacity style={styles.date}>
                    <Text style={styles.datetext}>{formattedDate}</Text>
                </TouchableOpacity> */}
              


            </>
        );
    }
}
const styles = StyleSheet.create({

    text1: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    text2: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    review: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateday:{
        flexDirection:'row',
        justifyContent:'space-between'
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
})
export default Washing;