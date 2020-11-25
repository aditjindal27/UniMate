import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, Dimensions, TouchableOpacity, Image, Linking, Platform } from 'react-native'
import fire from './Firebase'
import 'firebase/database'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class Connect extends Component {

    state = {
        desc: [],
        name: [],
        number: 0,
        serial: 0,
        data: []
    }
    _renderItem = ({ item }) => (
        <View>
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.text1}>{item.name}</Text>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
                <Text style={styles.text2}>{item.desc.toString().replace(/_n/g, "\n")}</Text>
            </View>
        </View>
    );

    emailSend = () => {
        Linking.openURL('mailto:unimategt@gmail.com?subject=Serial number of student you want to talk to:&body=Your Name:\nYour intended major:\nAlternate serial number in case of unavailability:\nHow much time do you need:\nPreferred day and time with timezone:\nVideo call or phone call:\n');
    }

    componentDidMount = () => {
        //let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100)
        //fire.database().ref('ADIT').push(this.state.text);

        fire.database().ref().child("DATA").once('value', snap => {
            snap.forEach(child => {
                var x = { name: child.key, desc: child.val() }
                this.setState({ data: this.state.data.concat(x) })
            });

        });
    }
    render() {

        return (
            <SafeAreaView style={styles.Screen}>

                <View style={{height: hp("5%"), width: hp("5%") }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }}>
                        <Image style={{ height: hp("5%"), width: hp("5%") }} source={require('../assets/menu.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 20, marginBottom: 0, marginRight: 10, marginTop: 20, alignItems: 'center', justifyContent:'center'}}>

                    <Text style={styles.instruction}>Navigate to <Text onPress={() => { this.props.navigation.navigate("Instructions") }} style={{ textDecorationLine: 'underline', fontFamily: "A", fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>instructions</Text> tab for information on pricing and more!{"\n"}{"\n"}If you are ready, click send email to open your mail application.</Text>
                    <TouchableOpacity onPress={() => { this.emailSend() }}>
                        <Text style={styles.email}>SEND EMAIL</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
                <FlatList
                    keyExtractor={item => item.name}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </SafeAreaView>
        );
    };

}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#B3A369',
        paddingTop: Platform.OS === 'android' ? 25:0 
    },
    instruction: {
        fontFamily: "A",
        fontSize: 20, 
        //fontWeight: 'bold',
        marginBottom: 25
    },
    text1: {
        fontFamily: "C",
        fontSize: 40,
        //fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 30,
    },
    text2: {
        fontFamily: "A",
        fontSize: 20,
        //fontWeight: 'bold',
        marginBottom: 30,
    },
    separator: {
        height: 2,
        justifyContent: 'center',
        backgroundColor: "#003057",
        width: Dimensions.get('window').width,
        opacity: 0.8,
        shadowOpacity: 0.2
    },
    email: {
        fontFamily: "C",
        fontSize: 30,
        //fontWeight: 'bold',
        marginBottom: 20,
        color: "#003057"

    }
});

export default Connect