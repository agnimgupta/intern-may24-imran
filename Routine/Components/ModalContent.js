import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../Constants/Colors";
import { Icon } from "react-native-paper";
import MainButton from "../../ConstantComponets/MainButton";


const ModalContent = ({ press ,OnCLick}) => {
  return (
    <View style={{ width: 320, }}>
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
        <Icon
          name="close-circle-outline"
          size={39}
          color={"#3A643B"}
        ></Icon>
      </Pressable>

      <View><MainButton onPress={OnCLick}/></View>

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
        <Text style={{ fontFamily: "Nunito", color:Colors.neutrals800, fontSize: 17 }}>
          OR
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => alert("Functionality not added")}
        style={styles.secBtn}
      >
        <Text
          style={{
            fontFamily: "Nunito",
            color: Colors.primary100,
            fontSize: 18,
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

      <View style={{ justifyContent: "center", alignItems: "center",marginBottom:12 }}>
        <Text
          style={{
            fontFamily: "Nunito",
            color: Colors.neutrals800,
            fontSize: 17,
            textDecorationLine: "underline",
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
    fontFamily: "Nunito",
    color: Colors.neutrals800,
    fontSize: 15,
    marginBottom:10,
  },

  secBtn: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    marginBottom:12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary100,
    backgroundColor: "white",
    marginTop: 15,
  },
});
