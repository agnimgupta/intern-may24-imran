import React from 'react';
import {StyleSheet, Text, TurboModuleRegistry, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import CRHomeScreen from './src/Screens/CreateRoutineScreens/CRHomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CreateNewRoutineScreen from './src/Screens/CreateRoutineScreens/CreateNewRoutineScreen';
import AddReminderScreen from './src/Screens/CreateRoutineScreens/AddReminderScreen';
import AssignRoutine from './src/Screens/RoutineScreen/AssignRoutine';
import CustomHeader from './src/ConstantComponents/CustomHeader';
import VideoToAssignRoutine from './src/Screens/ConsultationToAssignRoutine/VideoToAssignRoutine';
import VideoToCreateRoutine from './src/Screens/ConsultationToAssignRoutine/VideoToCreateRoutine';
import ChatScreen from './src/Screens/ConsultationToAssignRoutine/ChatScreen';
import VideoCallScreen from './src/Screens/ConsultationToAssignRoutine/VideoCallScreen';
import CustomVideoCallHeader from './src/ConstantComponents/CustomVideoCallHeader';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          {/* CRHomeScreen */}
          <Stack.Screen
            name="CRHomeScreen"
            component={CRHomeScreen}
            options={{title: 'Routine'}}
          />
          {/* CNRScreen */}
          <Stack.Screen
            name="CreateNewRoutine"
            component={CreateNewRoutineScreen}
            options={{title: 'Create Routine'}}
          />
          {/* AddReminderScreen */}
          <Stack.Screen
            name="AddReminder"
            component={AddReminderScreen}
            options={{title: 'Add Reminder'}}
          />
          {/* AssignRoutine */}
          <Stack.Screen
            name="AssignRoutine"
            component={AssignRoutine}
            options={{
              header: props => (
                <CustomHeader
                  Name="Lorem ipsum"
                  Status="Online"
                  Img={{
                    uri: 'https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png',
                  }}
                  {...props}
                />
              ),
            }}
          />

          {/* ChatScreen */}
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              header: props => (
                <CustomHeader
                  Name="Geetanjali Shah"
                  Status="Online"
                  Img={{
                    uri: 'https://indiaek.com/wp-content/uploads/2022/02/clayton-mpDV4xaFP8c-unsplash.jpg',
                  }}
                  {...props}
                />
              ),
            }}
          />

          {/* VideoToAssignRoutine */}
          <Stack.Screen
            name="VideoToAssignRoutine"
            component={VideoToAssignRoutine}
            options={{
              header: props => (
                <CustomHeader
                  Name="Geetanjali Shah"
                  Status="Online"
                  Img={{
                    uri: 'https://indiaek.com/wp-content/uploads/2022/02/clayton-mpDV4xaFP8c-unsplash.jpg',
                  }}
                  {...props}
                />
              ),
            }}
          />
          {/* VideoToCreateRoutine */}
          <Stack.Screen
            name="VideoToCreateRoutine"
            component={VideoToCreateRoutine}
            options={{
              header: props => (
                <CustomHeader
                  Name="Geetanjali Shah"
                  Status="Online"
                  Img={{
                    uri: 'https://indiaek.com/wp-content/uploads/2022/02/clayton-mpDV4xaFP8c-unsplash.jpg',
                  }}
                  {...props}
                />
              ),
            }}
          />
          {/* VideoCall Screen */}
          <Stack.Screen
            name="VideoCall"
            component={VideoCallScreen}
            options={{
              header: props => <CustomVideoCallHeader {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default App;
