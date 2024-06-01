// RadioButton.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../Constants/Colors";

const RadioButtons = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.circle, selected && styles.selectedCircle]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 118,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#49454F",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    borderColor: Colors.primary100,
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary100,
  },
  label: {
    marginLeft: 10,
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    fontWeight: "400",
    color:'#101018'
  },
});

export default RadioButtons;
