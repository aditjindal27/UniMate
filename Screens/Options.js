import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Animated, Image, View, Platform, Dimensions } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Options extends Component {

    state = {
        a: new Animated.Value(0),
        menuOpen: false,
        arrow: true
    };

    onSwipePerformed = (action) => {
        switch (action) {
            case 'right': {
                this.setState({ arrow: false })
                this.props.navigation.toggleDrawer()
                break;
            }
        }
    }
    render() {

        return (
                <SafeAreaView style={styles.Screen}>
                    <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }}>
                        <Image style={{ height: hp("5%"), width: hp("5%")}} source={require('../assets/menu.png')} />
                    </TouchableOpacity>
                    <View style={{alignItems:'center', margin: wp("5%"), height: hp("85%"), flexGrow:1}}>
                        <View style={styles.view}>
                            <Image style={styles.ImageS} source={require('../assets/prof.png')} />
                            <TouchableOpacity style={styles.buttons} activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("Professors and GPA") }} >
                                <Text style={styles.buttonText}> PROFESSORS AND GPA </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view}>
                            <TouchableOpacity style={styles.buttons} activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("Class Information") }} >
                                <Text style={styles.buttonText}> CLASS INFORMATION </Text>
                            </TouchableOpacity>
                            <Image style={styles.ImageS} source={require('../assets/info.png')} />
                        </View>
                        <View style={styles.view}>
                            <Image style={styles.ImageS} source={require('../assets/connect.001.png')} />
                            <TouchableOpacity style={styles.buttons} activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("Connect with students") }} >
                                <Text style={styles.buttonText}> CONNECT </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view}>
                            <TouchableOpacity style={styles.buttons} activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("Instructions") }} >
                                <Text style={styles.buttonText}> INSTRUCTIONS </Text>
                            </TouchableOpacity>
                            <Image style={styles.ImageS} source={require('../assets/ins.001.png')} />
                        </View>
                        <View style={styles.view}>
                            <Image style={styles.ImageS} source={require('../assets/wifi.001.png')} />
                            <TouchableOpacity style={styles.buttons} activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("Other Important Websites") }} >
                                <Text style={styles.buttonText}> OTHER LINKS </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#B3A369',
        paddingTop: Platform.OS === 'android' ? 25:0, 
        paddingBottom: Platform.OS === 'android' ? 25:0,
        paddingLeft: wp("3%"),
        paddingRight: wp("3%")
    },
    view: {
        flex: 1/5,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        //margin: hp("2%")
    },
    ImageS: {
        height: hp("8%"),
        width: hp("8%"),
    },
    buttonText: {
        fontFamily: "C",
        fontSize: wp("5.5%"),
        color: "#003057",
        //margin: wp("1%"),
    },
    buttons: {
        margin: wp("4%"),
        // backgroundColor: 'white',
        // borderRadius: 20,
        // marginTop: 0,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        // elevation: 12,
        // textAlign: 'center'
    },
    text2: {
        fontFamily: "A",
        fontSize: 20,
        color: "black",
        marginTop: 20
    },
    overlay: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Options;