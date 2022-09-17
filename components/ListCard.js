import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
// import React from "react";
// import { imgDate } from "../assets/data/ListData";
// import {assets} from '../constants'
import { Feather,AntDesign } from '@expo/vector-icons';
const ListCard = ({data}) => {
  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity style={{ flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',}}>
      <Feather name="music" size={24} color="white" />
      <Text style={{color: 'white',fontSize: 18,fontWeight: 'bold',textTransform: 'uppercase',position: 'absolute',left: 40}}>{data.name}</Text>
      <Text style={{color: 'gray',fontSize: 13,fontWeight: '500',textTransform: 'capitalize',position: 'absolute',left: 40,top: 20}}>{data.des}</Text>
      <AntDesign name="right" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );  
};

export default ListCard;

const styles = StyleSheet.create({});
