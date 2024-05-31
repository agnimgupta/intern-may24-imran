import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Colors from '../Constants/Colors';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        color={Colors.primary100}
        title="Route to Routine"
        onPress={() => navigation.navigate('CRHomeScreen')}
      />

      <Button
        color={Colors.primary100}
        title="Route to ChatScreen"
        onPress={() => navigation.navigate('ChatScreen')}
      />

      <Button
        color={Colors.primary100}
        title="Route to VideoCall"
        onPress={() => navigation.navigate('VideoCall')}
      />

      <Button
        color={Colors.primary100}
        title="Route to CreateRoutine"
        onPress={() => navigation.navigate('VideoToCreateRoutine')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
