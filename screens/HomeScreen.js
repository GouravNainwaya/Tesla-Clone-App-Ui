import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import React,{useState} from "react";
// import ListData from './../assets/data/ListData';
// Lis
import ListCard from "../components/ListCard";
import HomeHeader from "./../components/HomeHeader";
import CircleButton from "./../components/CircleButton";
import ListData from "./../assets/data/ListData";

const HomeScreen = () => {
  const [active, setactive] = useState(false)
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/background.png")}
      >
        <HomeHeader />
        <ScrollView>
          {/* <View > */}

          {/* </View> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircleButton imgUrl={require("../assets/icons/shuriken.png")} />
            <CircleButton imgUrl={require("../assets/icons/key.png")} />
            {/* <CircleButton imgUrl={require('../assets/icons/key.png')}/> */}
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
              onPress={() => setactive(!active)}
            >
              {active ? <Image
                source={require("../assets/icons/unlocked.png")}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: "white",
                }}
              /> : <Image
              source={require("../assets/icons/lock.png")}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: "white",
              }}
            />}

            </TouchableOpacity>
          </View>

          <FlatList
            data={ListData}
            renderItem={({ item }) => <ListCard data={item} />}
            // keyExtractor={(item) => item.id}
            // ListHeaderComponent={<HomeHeader  />}
            // stickyHeaderIndices={[0]}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
