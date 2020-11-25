import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView, Platform } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Instructions = props => {
    return (
        <SafeAreaView style={styles.Screen}>
            <View style={{ height: hp("5%"), width: hp("5%") }}>
                <TouchableOpacity onPress={() => { props.navigation.toggleDrawer() }}>
                    <Image style={{ height: hp("5%"), width: hp("5%") }} source={require('../assets/menu.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView indicatorStyle={'black'}>
                <View style={{ margin: wp("5%") }}>
                    <Text style={styles.text}>The connect with other students feature is an easy way to expand your network and learn what Georgia Tech has to offer for a small fee!</Text>
                    <Text style={styles.text3}>Pricing:</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{ flexDirection: 'column', margin: wp("5%")}}>
                            <Text style={styles.text2}>15 min</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text2}>$5</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', margin: wp("5%")}}>
                            <Text style={styles.text2}>30 min</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text2}>$9</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', margin: wp("5%")}}>
                            <Text style={styles.text2}>60 min</Text>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text2}>$15</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.text4}>After hour standard rate of  <Text style={{ fontFamily: 'C' }}>1$/5min</Text></Text>
                        <Text style={styles.text5}>All payments must be done before call</Text>
                        <Text style={styles.text4}>You can choose to video call or phone call</Text>
                        <Text style={styles.text4}>Same rates apply</Text>
                    </View>
                    <Text style={styles.text3}>Steps:</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center', margin: wp("5%")}}>
                        <View style={styles.steps}>
                            <Text style={styles.text6}>Scroll through the list</Text>
                        </View>
                        <View style={styles.steps}>
                            <Text style={styles.text6}>Choose student number</Text>
                        </View>
                        <View style={styles.steps}>
                            <Text style={styles.text6}>Click send email</Text>
                        </View>
                        <View style={styles.steps}>
                            <Text style={styles.text6}>Email app opens with prompts</Text>
                        </View>
                        <View style={styles.steps}>
                            <Text style={styles.text6}>In 24hrs payment instruction email is sent </Text>
                        </View>
                        <View style={styles.steps}>
                            <Text style={styles.text6}>After payment, confirmation email is sent</Text>
                        </View>
                        <View style={styles.steps}>
                            <Text style={styles.text6}>Student contacts you</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );

}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#B3A369',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    steps: {
        borderWidth: 3,
        borderRadius: 20,
        borderColor: "#003057",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#003057",
        opacity: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        fontFamily: "A",
        fontSize: 20,
        marginBottom: 5,
    },
    text2: {
        fontFamily: "C",
        fontSize: Platform.OS === 'android'? hp("3%"):20,
    },
    text3: {
        fontFamily: "C",
        fontSize: 40,
        marginTop: 20,
    },
    text4: {
        fontFamily: "A",
        fontSize: 20,
        marginBottom: 5,
        textAlign: "center"
    },
    text5: {
        fontFamily: "A",
        fontSize: 20,
        marginBottom: 5,
        textDecorationLine: 'underline',
        textAlign: "center"
    },
    text6: {
        fontFamily: "C",
        fontSize: 20,
        margin: 10,
        color: "#FFF",
        textAlign: 'center'
    }

});

export default Instructions