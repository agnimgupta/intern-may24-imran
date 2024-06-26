import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const InfoContainer = () => {
  return (
    <View style={styles.InfoContainer}>
      <View style={styles.InfoIcon}>
        <MaterialCommunityIcons name="information-outline" size={20} />
      </View>

      <View style={styles.InfoTextContainer}>
        <Text style={styles.InfoText}>
          Well done! Consultation time is over 🎊
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InfoContainer: {
    marginBottom: 10,
    height: 23,
    flexDirection: "row",
    top: 12,
  },
  InfoTextContainer: {
    alignItems: "center",
    height: 23,
    marginLeft: 10,
  },
  InfoText: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    fontWeight: "500",
    color:'#101018'
  },

  InfoIcon: {
    width: 20,
    height: 20,
  },
});

export default InfoContainer;
