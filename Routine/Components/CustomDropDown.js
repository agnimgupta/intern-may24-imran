import React from "react";
import { StyleSheet, View ,TextInput,Text} from "react-native";

const CustomDropDown = ({label}) => {
  return (
    <View >
      <TextInput
        style={styles.textInput}
        placeholder="Add your question"
        placeholderTextColor="black"
      />
      
      <Text style={styles.labelText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
//   mainContainer: {
//     width:342,
//     height: 55,
//     borderWidth: 1,
//     borderColor: "#D6D6D6",
//     borderRadius: 18,
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 28,
//   },
  textInput: {
    height: "100%",
    width: "100%",
    paddingLeft: 14,
    color: "black",
    fontSize: 16,
    fontFamily:'Nunito-Regular',
    fontWeight:'500'
  },
  wordCount: {
    color: "#B6B6B6",
    fontSize: 10,
    flex: 1,
  },
  labelText: {
    position: "absolute",
    top: -14,
    left: 11,
    paddingHorizontal: 5,
    color: "#B6B6B6",
    backgroundColor:'white',
    fontFamily:'Nunito-Light',
    fontSize:12,
  },
});

export default CustomDropDown;
