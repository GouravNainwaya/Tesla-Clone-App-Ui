import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CircleButton = ({ imgUrl }) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 200,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          tintColor: "white",
        }}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({});
