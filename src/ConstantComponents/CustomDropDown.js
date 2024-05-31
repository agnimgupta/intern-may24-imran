import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDropDown = ({label, placeholder}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableOpacity >
      {/* <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="black"
      /> */}
      <View style={styles.textInput}>
        <Text>{placeholder}</Text>
      </View>
      {clicked ? (
        <View style={styles.listContainer}>
          <Text>Hello</Text>
        </View>
      ) : null}
      {/* <View style={{height: 20}}>
        <Ionicons name="chevron-down" size={20} />
      </View> */}
      <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 342,
    height: 55,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  listContainer: {
    position: 'absolute',
    width: 342,
  },
  textInput: {
    height: '100%',
    width: '100%',
    paddingLeft: 14,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
  },
  wordCount: {
    color: '#B6B6B6',
    fontSize: 10,
    flex: 1,
  },
  labelText: {
    position: 'absolute',
    top: -12,
    left: 11,
    paddingHorizontal: 5,
    color: '#B6B6B6',
    backgroundColor: 'white',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },
});

export default CustomDropDown;
