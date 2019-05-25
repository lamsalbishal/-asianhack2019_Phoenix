import React, {Component} from 'react';
import { 
        Text,
        StyleSheet, 
        View,
        } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Zocial from 'react-native-vector-icons/Zocial';
const email = <Zocial name="email" size={30} color="#900" />;
const web = <Foundation name="web" size={30} color="#900" />;
const phone = <Icon name="phone" size={30} color="#900" />;
const addressbook = <Icon name="address-book" size={30} color="#900" />;

 
export default class Contact extends Component {
    
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Contact Us ',
        };
      };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contactContainer}>
                    <View>
                        <Text style={styles.contactTitle}>Contact Us</Text>
                    </View>
                
                    <View>

                        <View style={styles.contactPage}>
                            <View style={styles.contactView}>
                                <Text>{web}</Text>
                                <Text style={styles.containText}>www.communtity wordlink.com</Text>
                            </View>
                            <Text style = {styles.horizontalLine}></Text>
                        </View>
                    
                        <View style={styles.contactPage}>
                            <View style={styles.contactView}>
                                <Text>{email}</Text>
                                <Text style={styles.containText}>communtitywordlink@gmail.com</Text>
                            </View>
                            <Text style = {styles.horizontalLine}></Text>
                        </View>
                    
                        <View style={styles.contactPage}>
                            <View style={styles.contactView}>
                                <Text>{phone}</Text> 
                                <Text style={styles.containText}>98765432</Text>
                            </View>
                            <Text style = {styles.horizontalLine}></Text>
                        </View>

                        <View style={styles.contactPage}>
                            <View style={styles.contactView}>
                                <Text>{addressbook}</Text> 
                                <Text style={styles.containText}>Kathmandu</Text>
                            </View>
                            <Text style = {styles.horizontalLine}></Text>
                        </View>
                
                    </View>
                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: '#F5FCFF',
    },

    contactContainer: {
        backgroundColor:'#ffffff',
        borderRadius:20,
        padding:20,
        margin:20,
    },

    contactTitle:{
        fontSize:20,
        fontWeight:'700',
        color:'#000000',
        textAlign:'center'
    },

    sliderShow : {
        height:300
    },

    contactPage: {
        padding:20,
    },

    contactView : {
        flexDirection:'row'
    },

    containText : {
        fontSize:24,
        paddingLeft:20,
        color:'#000000',
    },
        
    horizontalLine : {
        width:'100%',
        height:1,
        marginRight:20,
        backgroundColor:'#000000',
    }
 
});
