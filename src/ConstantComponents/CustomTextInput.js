import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

const CustomTextInput = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add your question"
        placeholderTextColor="black"
      />
      <Text style={styles.wordCount}>12 words</Text>
      <Text style={styles.headingText}>Add Question</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 342,
    height: 55,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },
  textInput: {
    height: "100%",
    width: "84%",
    paddingLeft: 14,
    color: "black",
    fontSize: 16,
    fontFamily:'Nunito-Regular',
  },
  wordCount: {
    color: "#B6B6B6",
    fontSize: 10,
    fontFamily: "Nunito-Light",

    flex: 1,
  },
  headingText: {
    position: "absolute",
    top: -12,
    left: 11,
    paddingHorizontal: 5,
    color: "#B6B6B6",
    backgroundColor: "white",
    fontFamily: "Nunito-Light",
    fontSize: 12,
  },
});

export default CustomTextInput;
