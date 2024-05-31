import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomDropDown from "../src/ConstantComponents/CustomDropDown";
import Colors from "../src/Constants/Colors";
import RadioButtons from "../src/CRComponents/RadioButtons";

const Step2 = () => {
  const [RBOption, setRBOption] = useState(null);
  const [selectedDay, setselectedDay] = useState([]);
  const [showDays, setshowdays] = useState(false);
  const Days = [
    {
      id: 1,
      day: "Mon",
    },
    {
      id: 2,
      day: "Tues",
    },
    {
      id: 3,
      day: "Wed",
    },
    {
      id: 4,
      day: "Thu",
    },
    {
      id: 5,
      day: "Fri",
    },
    {
      id: 6,
      day: "Sat",
    },
    {
      id: 7,
      day: "Sun",
    },
  ];

  const showCustomDays = () => {};

  const handlePress = (index) => {
    setselectedDay((prevSelectedDays) =>
      prevSelectedDays.includes(index)
        ? prevSelectedDays.filter((day) => day !== index)
        : [...prevSelectedDays, index]
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Activity Details</Text>

      <View style={styles.DropDownContainer}>
        <CustomDropDown
          label="Activity Name"
          placeholder="Amrutam Skinky Malt"
        />
      </View>

      <View style={styles.supportingTextCont}>
        <Text style={styles.supportingText}>
          Unable to find activity? Add your Activity
        </Text>
      </View>

      <View style={styles.DropDownContainer}>
        <CustomDropDown label="Activity Type" placeholder="Consumable" />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <View style={styles.QuantitydropDown}>
          <CustomDropDown label="Quantity" placeholder="two" />
        </View>

        <View style={styles.UnitdropDown}>
          <CustomDropDown label="Unit" placeholder="TBSP" />
        </View>
      </View>
      <View style={styles.radioContainer}>
        <RadioButtons
          label="Daily"
          selected={RBOption === "option1"}
          onPress={() => [setRBOption("option1"), setshowdays(false)]}
        />
        <RadioButtons
          label="Customs Days"
          selected={RBOption === "option2"}
          onPress={() => [setRBOption("option2"), setshowdays(!false)]}
        />
      </View>
      {showDays ? (
        <View style={styles.customDays}>
          {Days.map((item, index) => (
            <TouchableOpacity
              onPress={() => handlePress(index)}
              style={[
                styles.DaysCont,
                selectedDay.includes(index)
                  ? styles.SelectedDaysCont
                  : styles.DaysCont,
              ]}
              key={item.id}
            >
              <Text style={styles.DaysText}>{item.day}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:20,
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
    marginTop: 20,
    marginBottom: 5,
  },
  supportingTextCont: {
    width: 342,
    height: 20,
    gap: 10,
    left: 15,
  },
  supportingText: {
    fontFamily: "Nunito-Regular",
    fontWeight: "500",
    fontSize: 12,
    color: Colors.primary100,
  },
  QuantitydropDown: {
    width: 197,
    height: 56,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    marginRight: 10,
  },
  UnitdropDown: {
    width: 131,
    height: 56,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },

  radioContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  customDays: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 342,
    height: 52,
    borderRadius: 16,
    padding: 8,
    gap: 7,
    backgroundColor: "#E9F1E0",
  },

  DaysCont: {
    width: 41,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#E9F1E0",
    alignItems: "center",
    justifyContent: "center",
    color: "#A0A0A0",
  },
  SelectedDaysCont: {
    width: 41,
    height: 32,
    borderRadius: 8,
    color: "white",
    backgroundColor: Colors.primary100,
    alignItems: "center",
    justifyContent: "center",
  },
  DaysText: {
    fontFamily: "Nunito-Regular",
    fontWeight: "500",
    fontSize: 12,
    color: "#A0A0A0",
  },
});

export default Step2;
