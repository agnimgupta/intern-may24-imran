import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { ProgressBar } from "react-native-paper";

const ProgressCard = ({ img, title, tltReminder, progressText, progress }) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.imgCont}>
        <Image
          source={img}
          style={styles.image}
          resizeMode="cover" // Adjust as needed
        />
      </View>

      <View style={styles.title}>
        <Text style={styles.titleTXT}>{title}</Text>
       
      </View>
      <View style={styles.title}>
        <Text style={styles.subTXT}>{tltReminder}</Text>
      </View>
      {/* progressbar */}
      <View style={styles.PBcontainer}>
        <ProgressBar
          progress={progress}
          color="#3A643B" // Dark green color
          style={styles.progressBar}
        />
      </View>
      {/* progressbarr */}
      <View style={styles.title}>
        <Text style={styles.progressText}>{progressText} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProgressCard;

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    width: 161,
    height: 259,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    padding: 10,
    marginRight: 18,
  },

  imgCont: {
    height: 144,
    width: 144,
    marginBottom: 5,
  },

  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },

  title: {
    width: 144, 
    height: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  titleTXT: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Nunito-SemiBold",
    marginBottom: 10,
    marginRight: 10,
  },

  subTXT: {
    fontSize: 12,
    fontWeight: "400",
    color: "#A0A0A0",
    fontFamily: "Nunito-Medium",
  },

  progressText: {
    fontSize: 10,
    fontWeight: "500",
    color: "#A0A0A0",
    fontFamily: "Nunito-Medium",
  },

  PBcontainer: {
    width: "100%",
    height: 10,
    backgroundColor: "white", // White background color
    borderRadius: 10,
    overflow: "hidden", // Clip the progress bar within the container
  },
  progressBar: {
    height: 10,
    borderRadius: 10,
  },
});