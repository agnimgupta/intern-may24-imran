import React from 'react';
import {StyleSheet, Text, TurboModuleRegistry, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import CRHomeScreen from './src/Screens/CreateRoutineScreens/CRHomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CreateNewRoutineScreen from './src/Screens/CreateRoutineScreens/CreateNewRoutineScreen';
import AddReminderScreen from './src/Screens/CreateRoutineScreens/AddReminderScreen';
import AssignRoutine from './src/Screens/RoutineScreen/AssignRoutine';
import CustomHeader from './src/ConstantComponents/CustomHeader';

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
                    uri: 'https://s3-alpha-sig.figma.com/img/bf86/f72b/5c845f4632a24b416e1b7b4b9c009145?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUehuWISfpUIPVotNr7c~Tlhhb36JQWRV0hKmp7Z1lQQcusi70Rr63jKhDFexhZADQVErGfok65U-rO~McH5Ky3AYcEORyD-CT8j422gB4iOcHzd09HZ~qxnxM5RAx9fACQ43K9nGRsHbEtHB54~n3EWZugL7Tv~5UKsYX6U7PhfS6MrSzIEiyp890sxYt6sFB~3wRtxeum1o9HIGhQPvA7A9cGrMSfMahVeyUQOIDCPvurzD7cuUvKq87YlJlC39CLZpZwoT6bqZ~r4g0SzB3PQbgCuKDnGCW-vId5KAg8iygYAiZ1Id5aHppzzdzjOsdUCp-njRVInvts046QLQQ__',
                  }}
                  {...props}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default App;
