import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

const ExplainTextInput = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Explain “Geetanjali Shah” about the Concern"
          placeholderTextColor="black"
          multiline={true}
        />
      </View>

      <Text style={styles.headingText}>Explain</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 296,
    height: 151,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 28,
    paddingLeft: 5,
    paddingRight: 5,
  },

  textInput: {
   
    marginTop: 10,
    paddingLeft: 14,
    paddingRight: 14,
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
  },

  wordCount: {
    color: '#B6B6B6',
    fontSize: 10,
    flex: 1,
  },
  headingText: {
    fontFamily: 'Nunito-Light',
    position: 'absolute',
    top: -14,
    left: 11,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    color: '#B6B6B6',
  },
});

export default ExplainTextInput;
