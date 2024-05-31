import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import InfoContainer from "../../ConstantComponents/InfoContainer";
import ProfileCard from "../../ConstantComponents/ProfileCard";
import CustomDropDown from "../../ConstantComponents/CustomDropDown";
import ExplainTextInput from "../../ConstantComponents/ExplainTextInput";
import MainButton from "../../ConstantComponents/MainButton";

const AssignRoutine = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.InfoContainer}>
        <InfoContainer />
      </View>
      <View style={styles.ProfileCardContainer}>
        <ProfileCard
          age="34"
          height="5,10"
          weight="74"
          SleepPattern="Better not good"
          General_Concerns="Back pain, Mig.. +2"
        />
      </View>
      <View style={styles.CustomDropDownContainer}>
        <CustomDropDown label="Current Concerns" placeholder="Knee Pain"/>
      </View>

      <View style={styles.ExplainTextInputContainer}>
        <ExplainTextInput />
      </View>

      <View style={styles.ButtonContainer}>
        <MainButton
          onPress={() => alert("functionality not added")}
          ButtonTitle="Next"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
  },
  InfoContainer: {
    marginBottom: 25,
  },
  ProfileCardContainer: {
    marginBottom: 12,
  },
  CustomDropDownContainer: {
    width: 296,
    height: 55,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 12,
  },
  ExplainTextInputContainer: {
    marginBottom:30
  },

  ButtonContainer:{
    width:296
  }
});

export default AssignRoutine;
