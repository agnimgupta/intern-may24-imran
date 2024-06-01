import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import CustomDropDown from '../ConstantComponents/CustomDropDown';
import RadioButtons from '../CRComponents/RadioButtons';
import DatePicker from 'react-native-date-picker';
import NewDropDown from '../ConstantComponents/NewDropDown';
import Colors from '../Constants/Colors';
import AddReminderItems from '../CRComponents/AddReminderItems';
const Step3 = () => {
  var currdate = new Date().getDate();
  const [RBOption, setRBOption] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
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
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Add Time Slot</Text>
      </View>

      <View style={styles.DropDownContainer}>
        <NewDropDown
          data={data}
          onSelect={handleSelect}
          label="Meal"
          placeholder="Lunch"
        />
      </View>

      <View style={styles.radioContainer}>
        <RadioButtons
          label="Before Meal"
          selected={RBOption === 'option1'}
          onPress={() => setRBOption('option1')}
        />
        <RadioButtons
          label="After Meal"
          selected={RBOption === 'option2'}
          onPress={() => setRBOption('option2')}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btnStyle} onPress={() => setOpen(true)}>
          <Text style={styles.btnText}>Set Time</Text>
        </TouchableOpacity>

        <DatePicker
          modal
          open={open}
          date={date}
          mode="time"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>

      <View style={{marginTop:15}}>
        <AddReminderItems heading="Add more slots" subHeading=" " />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 20,
    fontFamily: 'Nunito-Regular',
    color: '#101018',
    alignSelf: 'flex-start',
  },
  DropDownContainer: {
    width: 342,
    height: 60,
    marginTop: 28,
  },
  radioContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 20,
  },

  btnStyle: {
    width: 342,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.primary100,
    marginTop: 15,
    marginBottom: 12,
    textAlign: 'center',
    borderWidth: 1,
  },

  btnText: {
    fontFamily: 'SemiBold',
    color: '#646665',
    fontSize: 16,
    // fontWeight:'700',
    fontFamily: 'Nunito-SemiBold',
  },
});

export default Step3;
