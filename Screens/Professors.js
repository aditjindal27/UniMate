import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, Alert, Text, View, Linking, TouchableOpacity, Image, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Professors = props => {

  const [loaded, setLoaded] = useState(true);
  const [unique, setUnique] = useState(1);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const webviewRef = useRef(null);

  let backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  };

  let frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  };

  return (
    <SafeAreaView style={styles.container} key={unique}>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: hp("5%"), width: hp("5%") }}>
          <TouchableOpacity onPress={() => { props.navigation.toggleDrawer() }}>
            <Image style={{ height: hp("5%"), width: hp("5%") }} source={require('../assets/menu.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ height: hp("5%"), width: hp("5%"), position: 'absolute', right: wp("2%") }}>
          <TouchableOpacity onPress={() => { setUnique(unique + 1) }}>
            <Image style={{ height: hp("5%"), width: hp("5%") }} source={require('../assets/reload.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <WebView
        startInLoadingState={true}
        source={{ uri: 'https://gtcourses.herokuapp.com' }}
        onError={() => { Alert.alert("Check your internet connection") }}
        onLoadEnd={() => { setLoaded(false) }}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack)
          setCanGoForward(navState.canGoForward)
          setCurrentUrl(navState.url)
        }}
      />
      {loaded && (<View style={styles.indicator}><ActivityIndicator size="large" color="#003057" /></View>)}
      
      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Text style={styles.button}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={frontButtonHandler}>
          <Text style={styles.button}>FORWARD</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#B3A369',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  tabBarContainer: {
    padding: hp("2%"),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#003057'
  },
  button: {
    color: 'white',
    fontSize: 20
  }
});

export default Professors;

