import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomVideoCallHeader = ({navigation}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.HeaderTextIconCont}>
        <View style={styles.VideoCodeCont}>
          <Text style={styles.VideoCodeText}>mark-hay-video-call</Text>
        </View>

        <View style={styles.IconCont}>
          <FontAwesome6 name="rotate" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: "100%",
    height: 64,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    elevation: 1,
  },

  backButton: {
    marginLeft: 10,
  },

  VideoCodeCont: {
    width: 207,
    height: 24,
  },

  VideoCodeText: {
    fontFamily: "Nunito-SemiBold",
    fontWeight: "500",
    fontSize: 16,
    color: "white",
  },

  IconCont: {
    width: 24,
    height: 24,
  },

  HeaderTextIconCont: {
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-around",
    width: 340,
    height: 24,
  },
});

export default CustomVideoCallHeader;
