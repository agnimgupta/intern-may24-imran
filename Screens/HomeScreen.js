import React from "react";
import { Button, StyleSheet, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        
        title="Route to Routine"
        onPress={() => navigation.navigate("Routine")}
      />

      <Button
        
        title="Route to Consult"
        onPress={() => navigation.navigate("Consult")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom:20
  },
});

export default HomeScreen;
