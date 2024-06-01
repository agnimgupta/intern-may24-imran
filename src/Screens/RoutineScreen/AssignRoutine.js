import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InfoContainer from '../../ConstantComponents/InfoContainer';
import ProfileCard from '../../ConstantComponents/ProfileCard';
import NewDropDown from '../../ConstantComponents/NewDropDown';
import ExplainTextInput from '../../ConstantComponents/ExplainTextInput';
import MainButton from '../../ConstantComponents/MainButton';

const AssignRoutine = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
  };

  const data = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.InfoContainer}>
          <InfoContainer />
        </View>
        <View style={styles.ProfileCardContainer}>
          <ProfileCard
            age="34"
            height="5,10"
            weight="74"
            SleepPattern="Better not good"
            General_Concerns="Back pain, Mig.. +2"
          />
        </View>
        <View style={styles.CustomDropDownContainer}>
          <NewDropDown
            data={data}
            onSelect={handleSelect}
            label="Current Concerns"
            placeholder="Knee Pain"
          />
        </View>

        <View style={styles.ExplainTextInputContainer}>
          <ExplainTextInput />
        </View>

        <View style={styles.ButtonContainer}>
          <MainButton
            onPress={() => alert('functionality not added')}
            ButtonTitle="Next"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    
    
  },

  scrollContainer: {
    maxWidth: '100%',
    alignItems: 'center',
  },
  InfoContainer: {
    marginBottom: 25,
  },
  ProfileCardContainer: {
    marginBottom: 12,
  },
  CustomDropDownContainer: {
    width: 296,
    height: 60,
    marginTop: 28,
    marginBottom: 12,
  },
  ExplainTextInputContainer: {
    marginBottom: 30,
  },

  ButtonContainer: {
    width: 296,
  },
});

export default AssignRoutine;
