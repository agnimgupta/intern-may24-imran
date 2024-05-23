import React from "react";
import { Button, StyleSheet, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        style={styles.container}
        title="Route to Routine"
        onPress={() => navigation.navigate("Routine")}
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
  },
});

export default HomeScreen;
