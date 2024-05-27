import React from "react";
import { Button, StyleSheet, View } from "react-native";
import Colors from "../Constants/Colors";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color={Colors.primary100}
        title="Route to Routine"
        onPress={() => navigation.navigate("Routine")}
      />

      <Button
        color={Colors.primary100}
        title="Route to Consult"
        onPress={() => navigation.navigate("Consult")}
      />

      <Button
        color={Colors.primary100}
        title="Route to VideoCall"
        onPress={() => navigation.navigate("VideoCall")}
      />

      <Button
        color={Colors.primary100}
        title="Route to VideoRoutine2"
        onPress={() => navigation.navigate("VideoToRoutine2")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
