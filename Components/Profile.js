import React from "react";
import { View,Text,StyleSheet }from "react-native";
class Profile extends React.Component{
    render(){
        return(
            <>
            <View>
            <Text style={styles.text}>Profile</Text>
            <MaterialIcons name="contact-page" size={24} color="black" />
            </View>
            </>
        )
    }
}
const styles=StyleSheet.create({
text:{
    fontSize:30,
    color:'#02ccfe',
    textAlign:'center'

}
})
export default Profile;