import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomHeader = ({ navigation, Name, Status, Img }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.topContent}>
        <View style={styles.avatarCont}>
          <Image style={styles.avatar} source={Img} />
        </View>

        <View style={{}}>
          <Text style={styles.name}>{Name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.concern}>{Status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    elevation: 1,
  },
  avatarCont: {
    width: 45,
    height: 45,
    borderRadius: 40,
    alignItems: "center",
    marginRight: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 40,
    objectFit:'contain',
    marginRight: 15,
  },
  backButton: {
    marginLeft: 10,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  topContent: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Nunito-Bold",
  },
  concern: {
    fontSize: 14,
    color: "gray",
    fontFamily: "Nunito-Light",
  },
});

export default CustomHeader;
