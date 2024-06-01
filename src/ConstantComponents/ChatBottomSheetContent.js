import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MainButton from "./MainButton";
import InfoContainer from "./InfoContainer";

const ChatBottomSheetContent = ({ navigation }) => {
  return (
    <View>
      <View style={{ width: 314, alignItems: "center", top: -10 }}>
        <AntDesign name="minus" size={30} />
      </View>

      <View >
        <InfoContainer/>
      </View>

      <View>
        <MainButton
          ButtonTitle="Assign Routine"
          onPress={() => {
            navigation.navigate("VideoToAssignRoutine");
          }}
        />
      </View>
  
      <TouchableOpacity
        onPress={() => alert("Functionality not added")}
        style={styles.secBtn}
      >
        <Text
          style={{
            fontFamily: "Nunito-Bold",
            fontWeight: "600",
            color: Colors.primary100,
            fontSize: 16,
          }}
        >
          Create a new Routine
        </Text>
      </TouchableOpacity>

      <View style={styles.LearnMoreCont}>
        <TouchableOpacity onPress={() => alert("Functionality not added")}>
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              fontWeight: "600",
              color: Colors.primary100,
              fontSize: 16,
            }}
          >
            Learn More about Routine
          </Text>
        </TouchableOpacity>
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
    height: 23,
    // marginLeft: 10,
  },
  InfoText: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    fontWeight: "500",
  },
  secBtn: {
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

  LearnMoreCont: {
    height: 56,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
});

export default ChatBottomSheetContent;
