// App.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Step1 from '../../AddReminderComponents/Step1';
import Step2 from '../../AddReminderComponents/Step2';
import Step3 from '../../AddReminderComponents/Step3';
import Colors from '../../Constants/Colors';
import MainButton from '../../ConstantComponents/MainButton';

const AddReminderScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressSegment,
            currentStep >= 1 && styles.activeSegment,
          ]}
        />
        <View
          style={[
            styles.progressSegment,
            currentStep >= 2 && styles.activeSegment,
          ]}
        />
        <View
          style={[
            styles.progressSegment,
            currentStep >= 3 && styles.activeSegment,
          ]}
        />
      </View>
      <View style={styles.content}>{renderStep()}</View>
      <View style={styles.footer}>
        {/* <TouchableOpacity onPress={prevStep} disabled={currentStep === 1}>
          <Text style={[styles.button, currentStep === 1 && styles.disabled]}>
            Previous
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextStep} disabled={currentStep === 3}>
          <Text style={styles.button}>
            {currentStep === 3 ? "Finish" : `Next (${currentStep}/3)`}
          </Text>
        </TouchableOpacity> */}
        <View style={styles.ButtonContainer}>
          <MainButton
            onPress={nextStep}
            ButtonTitle={
              <Text style={styles.button}>
                {currentStep === 3 ? 'Finish' : `Next (${currentStep}/3)`}
              </Text>
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 5,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 4,
    marginBottom: 20,
  },
  progressSegment: {
    flex: 1,
    height: 5,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 2,
    borderRadius: 4,
  },
  progressBar: {
    height: 10,
    backgroundColor: Colors.primary100,
  },
  activeSegment: {
    backgroundColor: Colors.primary100,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
  disabled: {
    color: '#ccc',
  },
  ButtonContainer: {
    width: 374,
    paddingRight: 20,
  },
});

export default AddReminderScreen;
