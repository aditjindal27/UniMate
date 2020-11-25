import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Image, Platform } from 'react-native';
import MaskedView from '@react-native-community/masked-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class Home extends Component {

    state = {
        loadingProgress: new Animated.Value(0),
        animationDone: false
    }

    componentDidMount = () => {
        Animated.timing(this.state.loadingProgress, {
            toValue: 75,
            duration: 3000,
            useNativeDriver: true,
            delay: 200
        }).start(() => {
            this.setState({ animationDone: true });
        });
    };
    render() {
        const colorLayer = this.state.animationDone ? null : <View style={[StyleSheet.absoluteFill, { backgroundColor: "#003057" }]} />;
        const whiteLayer = this.state.animationDone ? null : <View style={[StyleSheet.absoluteFill, { backgroundColor: "#B3A369" }]} />;
        const imageScale = {
            transform: [
                {
                    scale: this.state.loadingProgress.interpolate({
                        inputRange: [0, 15, 100],
                        outputRange: [0.1, 0.06, 16]
                    })
                }
            ]
        };
        const opacity = {
            opacity: this.state.loadingProgress.interpolate({
                inputRange: [0, 25, 50],
                outputRange: [0, 0, 1],
                extrapolate: 'clamp'
            })
        }

        return (
            Platform.OS === 'ios' ?
                <View style={{ flex: 1, backgroundColor: '#B3A369' }}>
                    {colorLayer}
                    <MaskedView
                        style={{ flex: 1 }}
                        maskElement={
                            <View style={styles.centered}>
                                <Animated.Image
                                    source={require('../assets/logo5.001.png')}
                                    style={[{ width: 1000 }, imageScale]}
                                    resizeMode="contain"
                                />
                            </View>
                        }>
                        {whiteLayer}
                        <Animated.View style={[opacity, styles.centered]}>
                            <View style={{ flex: 1 / 3., alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../assets/Logo_tbg.001.png')} style={{ height: hp("10%"), width: hp("10%"), shadowOpacity: 0.2 }} />
                            </View>
                            <View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.text1}>UniMate</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")}>
                                    <Text style={styles.continue}>
                                        CONTINUE
                            </Text>
                                </TouchableOpacity >
                            </View>
                            <View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../assets/sign.png')} style={{ height: 120, width: 220, shadowOpacity: 0.2 }} />
                                <Text style={styles.text3}>ADIT JINDAL</Text>
                            </View>
                        </Animated.View>
                    </MaskedView>
                </View> :
                <View style={styles.centered2}>
                    <View style={{ flex: 1 / 3., alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/Logo_tbg.001.png')} style={{ height: hp("10%"), width: hp("10%"), shadowOpacity: 0.2 }} />
                    </View>
                    <View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.text1}>UniMate</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")}>
                            <Text style={styles.continue}>CONTINUE</Text>
                        </TouchableOpacity >
                    </View>
                    <View style={{ flex: 1 / 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/sign.png')} style={{ height: 80, width: 150, shadowOpacity: 0.2, marginBottom: 5}} />
                        <Text style={styles.text3}>ADIT JINDAL</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    container: {
        flex: 1,
        backgroundColor: '#B3A369',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centered2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B3A369'

    },
    text1: {
        fontFamily: "C",
        fontSize: hp("9%"),
        marginBottom: 40,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    text2: {
        fontFamily: "A",
        fontSize: 20,
        marginBottom: 40,
    },
    continue: {
        fontFamily: "C",
        fontSize: hp("4%"),
        color: "#003057",
        shadowOpacity: 0.1
    },
    text3: {
        fontFamily: "C",
        fontSize: hp("3%"),
        position: 'absolute',
        bottom: 20,
    }
});

export default Home;