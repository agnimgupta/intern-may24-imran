import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../Constants/Colors";
import MainButton from "../ConstantComponents/MainButton";

const ModalContent = ({ press, OnCLick }) => {
  return (
    <View style={{ width: 320 }}>
      <Pressable
        onPress={press}
        style={{
          width: "100%",
          height: 39,
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Ionicons
          name="close-circle-outline"
          size={39}
          color={"#3A643B"}
        ></Ionicons>
      </Pressable>

      <View>
        <MainButton onPress={OnCLick} ButtonTitle="Create New Routine" />
      </View>

      {/* <TouchableOpacity
        style={styles.btnStyle}
        onPress={OnCLick}
      >
        <Text style={styles.btnText}>Create New Routine</Text>
      </TouchableOpacity> */}

      <View style={{ marginTop: 10, marginBottom: 10, left: 10, width: 280 }}>
        <Text
          style={styles.subText}
        >{`\u25AA  Your own personalization routine`}</Text>
        <Text style={styles.subText}>{`\u25AA  Add upto 7 reminders`}</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Nunito",
            color: Colors.neutrals800,
            fontSize: 17,
          }}
        >
          OR
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => alert("Functionality not added")}
        style={styles.secBtn}
      >
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            fontWeight:'600',
            color: Colors.primary100,
            fontSize: 16,
          }}
        >
          Import From Templates
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10, marginBottom: 10, left: 10, width: 280 }}>
        <Text
          style={styles.subText}
        >{`\u25AA  Multiple Templtes created by us`}</Text>
        <Text
          style={styles.subText}
        >{`\u25AA  Customize according to your need`}</Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            color: Colors.neutrals800,
            fontWeight:'600',
            fontSize: 16,
            textDecorationLine: "underline",
            color:Colors.primary100
          }}
        >
          View sample templates
        </Text>
      </View>
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  subText: {
    fontFamily: "Nunito-Regular",
    fontWeight: "400",
    color: Colors.neutrals800,
    fontSize: 14,
    marginBottom: 10,
  },

  secBtn: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary100,
    backgroundColor: "white",
    marginTop: 15,
  },
});
