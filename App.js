import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TurboModuleRegistry, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RoutineScreen from "./Screens/RoutineScreen";
import CreateNewRoutineScreen from "./Screens/CreateNewRoutineScreen";
import AssignDoctorScreen from "./Screens/AssignDoctorScreen";
import CustomHeader from "./ConstantComponets/CustomHeader";
import AddReminderScreen from "./Screens/AddReminderScreen";
import ConsultationScreen from "./Screens/ConsultationScreen";
import VideoCallScreen from "./Screens/VideoCallScreen";
import CustomVideoCallHeader from "./VideoCallContainer/CustomVideoCallHeader"
const Stack = createNativeStackNavigator();
export default function App({ navigation }) {
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
          options={{
            header: (props) => (
              <CustomHeader
                Name="Lorem ipsum"
                Status="Online"
                Img={{
                  uri: "https://s3-alpha-sig.figma.com/img/bf86/f72b/5c845f4632a24b416e1b7b4b9c009145?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUehuWISfpUIPVotNr7c~Tlhhb36JQWRV0hKmp7Z1lQQcusi70Rr63jKhDFexhZADQVErGfok65U-rO~McH5Ky3AYcEORyD-CT8j422gB4iOcHzd09HZ~qxnxM5RAx9fACQ43K9nGRsHbEtHB54~n3EWZugL7Tv~5UKsYX6U7PhfS6MrSzIEiyp890sxYt6sFB~3wRtxeum1o9HIGhQPvA7A9cGrMSfMahVeyUQOIDCPvurzD7cuUvKq87YlJlC39CLZpZwoT6bqZ~r4g0SzB3PQbgCuKDnGCW-vId5KAg8iygYAiZ1Id5aHppzzdzjOsdUCp-njRVInvts046QLQQ__",
                }}
                {...props}
              />
            ),
          }}
        />
        <Stack.Screen
          name="AddReminder"
          component={AddReminderScreen}
          options={{ title: "Add Reminder" }}
        />

        <Stack.Screen
          name="Consult"
          component={ConsultationScreen}
          options={{
            header: (props) => (
              <CustomHeader
                Name="Geetanjali Shah"
                Status="Online"
                Img={{
                  uri: "https://s3-alpha-sig.figma.com/img/91ba/cd31/e1e665c833197532a6cb8a1607eb2660?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kN1acw0G5bpyuW4Xl1OpTyyyoZmnmoMFYB9XK3IatoXPMmO-Z3gTOxyijINxMKQAQOLnA47Goi1IjLgNFYY2s4fEtd9tgbRJpmylNGnyzVJjEGJVLp1SaxRdFyQ19p02Aq5zRMXYF1qeMvC8YGpc8av6F6Uy~Kxkajge-PUjZ~CfBqa8LJzHcd07MH~DfEnu-Htkiy-nhnSRCACo3nGLJLTyhFgBf0BC3vCeKGJYKzPRUqCgMtDvq30lPRr0FqYzD8VgjPQ232zjpVMa0xZDYsR6yFO0od-XG1IFCSn7EBfEwb58dLnlVPo0mgHGTuY6Fv-aBLedZykZVQ38jzUDng__",
                }}
                {...props}
              />
            ),
          }}
        />

        <Stack.Screen
          name="VideoCall"
          component={VideoCallScreen}
          options={{
            header: (props) => <CustomVideoCallHeader {...props} />,
          }}
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
