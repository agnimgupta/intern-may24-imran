import React from "react";
import { StyleSheet, View ,Text} from "react-native";
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
    width: 314.74,
    height: 23,
    flexDirection: "row",
    top: 12,
  },
  InfoTextContainer: {
    width: 283,
    height: 23,
    marginLeft: 10,
  },
  InfoText: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    fontWeight: "500",
  },

  InfoIcon: {
    width: 20,
    height: 20,
  },
});

export default InfoContainer;
