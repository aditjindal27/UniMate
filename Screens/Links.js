import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image, FlatList, Dimensions, Linking, Platform} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class Links extends Component {

    state = {
        data: [
            { name: "Buzzport", desc: "Here you can find information on all courses as well as number of spots open.", link: "https://buzzport.gatech.edu" },
            { name: "Courseoff", desc: "Here you can create your schedules in an easy way which can be exported to the calenders on your phone.", link: "https://gatech.courseoff.com/" },
            { name: "Course Critique", desc: "Here you can look at average gpa's of different professors teaching the class.", link: "https://critique.gatech.edu/" },
            { name: "Rate My Professor", desc: "Here you can look at student given ratings and feedback about different professors.", link: "https://www.ratemyprofessors.com/campusRatings.jsp?sid=361" },
        ]
    }

    _renderItem = ({ item }) => (
        <View>
            <View style={{ marginLeft: 20 }}>
                <Text style={styles.text2}>{item.name}</Text>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
                <Text style={styles.text}>{item.desc}</Text>
            </View>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
                <Text style={styles.text3} onPress={() => { Linking.openURL(item.link.toString()) }}>{item.link}</Text>
            </View>
        </View>
    );

    render() {

        return (
            <SafeAreaView style={styles.Screen}>
                <View style={{ height: hp("5%"), width: hp("5%") }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }}>
                        <Image style={{ height: hp("5%"), width: hp("5%")}} source={require('../assets/menu.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.style1}>
                    <Text style={styles.text4}>Here are links to some important websites which will definitely help you at Georgia Tech!</Text>
                    <Text style={styles.text4}>Click the links to go to the website.</Text>
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
    style1: {
        margin: 20,
        marginBottom: 0
    },
    text: {
        fontFamily: "A",
        fontSize: 20,
        marginBottom: 20,
    },
    text3: {
        fontFamily: "A",
        fontSize: 20,
        marginBottom: 40,
        textDecorationLine: 'underline'

    },
    text4: {
        fontFamily: "A",
        fontSize: 20,
        marginBottom: 40,
    },
    separator: {
        height: 2,
        justifyContent: 'center',
        backgroundColor: "#003057",
        width: Dimensions.get('window').width,
        opacity: 0.8,
        shadowOpacity: 0.2
    },
    text2: {
        fontFamily: "C",
        fontSize: 45,
        marginBottom: 35,
        marginTop: 30,
    },
});

export default Links