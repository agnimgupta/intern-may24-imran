import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Colors from "../Constants/Colors";

export default function VideoCallScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://example.com/main-video.jpg" }} // Replace with your main video image URL
        style={styles.mainVideo}
      />
      <View style={styles.floatingVideoContainer}>
        <Image
          source={{ uri: "https://example.com/floating-video.jpg" }} // Replace with your floating video image URL
          style={styles.floatingVideo}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.endCall]}>
          <MaterialIcons name="call-end" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Feather name="video" size={28} color={Colors.primary100} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="mic" size={28} color={Colors.primary100} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="timer-outline" size={28} color={Colors.primary100} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons
            name="information-circle-outline"
            size={28}
            color={Colors.primary100}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  mainVideo: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  floatingVideoContainer: {
    position: "absolute",
    bottom: 100,
    right: 20,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius:8,
  },
  floatingVideo: {
    width: 137,
    height: 231,
    resizeMode: "cover",
    
  },
  buttonsContainer: {
    width: 338,
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  endCall: {
    backgroundColor: "#D90000",
  },
  buttonText: {
    fontSize: 15,
  },
});
