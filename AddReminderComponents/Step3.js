import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import CustomDropDown from "../Routine/Components/CustomDropDown";
import RadioButtons from "../ConstantComponets/RadioButtons";
import DateTimePicker from "@react-native-community/datetimepicker";

const Step3 = () => {
  const [RBOption, setRBOption] = useState(null);
  const [date, setDate] = useState();
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("time");

  const onChange = (e, selectedData) => {
    setDate(selectedData);
    setShow(false);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Time Slot</Text>

      <View style={styles.DropDownContainer}>
        <CustomDropDown label="Meal" placeholder="Lunch" />
      </View>

      <View style={styles.radioContainer}>
        <RadioButtons
          label="Before Meal"
          selected={RBOption === "option1"}
          onPress={() => setRBOption("option1")}
        />
        <RadioButtons
          label="After Meal"
          selected={RBOption === "option2"}
          onPress={() => setRBOption("option2")}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 20,
    fontFamily: "Nunito-Regular",
  },
  DropDownContainer: {
    width: 342,
    height: 56,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 30,
  },
  TimePickerContainer: {
    width: 342,
    height: 56,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default Step3;
