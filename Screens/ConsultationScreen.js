import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatScreen from "../ConsultationScreenComponents/ChatScreen";

const ConsultationScreen = () => {
  return (
    <View style={{ flex: 1 , backgroundColor:'white'}}>
      <ChatScreen />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConsultationScreen;
