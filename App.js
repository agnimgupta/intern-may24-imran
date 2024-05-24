import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RoutineScreen from "./Screens/RoutineScreen";
import CreateNewRoutineScreen from "./Screens/CreateNewRoutineScreen";
import AssignDoctorScreen from "./Screens/AssignDoctorScreen";
import CustomHeader from "./ConstantComponets/CustomHeader";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "HomeScreen" }}
        />
        <Stack.Screen
          name="Routine"
          component={RoutineScreen}
          options={{ title: "RoutineScreen" }}
        />
        <Stack.Screen
          name="CreateRoutine"
          component={CreateNewRoutineScreen}
          options={{ title: "Create Routine" }}
        />
        <Stack.Screen
          name="AssignDoctor"
          component={AssignDoctorScreen}
          options={{ header: (props) => <CustomHeader {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
