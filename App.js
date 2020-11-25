import * as React from 'react';
import { StyleSheet, Text, View, Platform, MaskedViewIOS, Animated, Button, TouchableOpacity, Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Screens/Home';
import Options from './Screens/Options';
import Professors from './Screens/Professors';
import ClassInfo from './Screens/ClassInfo';
import Links from './Screens/Links'; 
import Connect from './Screens/Connect'; 
import Instructions from './Screens/Instructions'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
  'A': require('./Fonts/Arial.ttf'),
  'C': require('./Fonts/Chalkduster.ttf'),
  });
};

const App = () => {

  const [dataLoaded, setDataLoaded] = React.useState(false)


  let createDrawer = () => 
    <Drawer.Navigator 
      //drawerContent={props=> <DrawerContent {...props} />}
      screenOptions={{}} 
      drawerType="front" 
      hideStatusBar="true" 
      drawerStyle={{backgroundColor:"#003057"}}
      drawerContentOptions={{

        labelStyle:{fontFamily:"A", fontSize: 18},
        activeTintColor:'white',
        activeBackgroundColor:'black',
        inactiveTintColor:'white'
      }}
      >
      <Drawer.Screen name='Menu' component={Options} />
      <Drawer.Screen name='Professors and GPA' component={Professors} />
      <Drawer.Screen name='Class Information' component={ClassInfo} />
      <Drawer.Screen name='Connect with students' component={Connect} />
      <Drawer.Screen name='Instructions' component={Instructions} />
      <Drawer.Screen name='Other Important Websites' component={Links} />
    </Drawer.Navigator>
  

  let createHomeStack = () => 
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" children={createDrawer} />
    </Stack.Navigator>
  
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={()=>{setDataLoaded(true)}}
        />

    );
  }

  return (
    <NavigationContainer>
      {createHomeStack()}
    </NavigationContainer>
  );
}
export default App;