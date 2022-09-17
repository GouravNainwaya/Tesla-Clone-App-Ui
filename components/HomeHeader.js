import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather,MaterialCommunityIcons } from '@expo/vector-icons';

const HomeHeader = () => {
  return (
    <View style={{padding: 14,}}>
        <View style={{paddingHorizontal: 10,flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
        <Feather name="settings" size={26} color="white" />
        <Text style={{fontSize: 18,color: 'white',fontWeight: 'bold'}}>Tesla Model</Text>
        <MaterialCommunityIcons name="toolbox-outline" size={26} color="white" />
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
            <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image source={require('../assets/battery.png')} resizeMode="contain" style={{width: 70,height: 80,}}/>
            <Text style={{fontSize: 28,color: 'white',fontWeight: 'bold',marginLeft: 5}}>150 mi</Text>
            </View>
        </View>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})