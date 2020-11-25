import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import Options from '../Screens/Options';
import Professors from '../Screens/Professors';
import ClassInfo from '../Screens/ClassInfo';
import Links from '../Screens/Links'; 
import Connect from '../Screens/Connect'; 
import Instructions from '../Screens/Instructions'
import {Drawer} from 'react-native-paper'



export function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <SafeAreaView style={{alignItems: 'center'}}>
                    <Text>MAINvgvivhvhibivih ih </Text>
                </SafeAreaView>

            </DrawerContentScrollView>
        </View>

    );
}