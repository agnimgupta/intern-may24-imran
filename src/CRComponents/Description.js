import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

const Description = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{marginTop: 10, marginBottom: 10, left: 10, width: 280}}>
        <View style={styles.ContentContainer}>
          {/* <Text
            style={styles.subText}
          >{`\u25AA  Your own personalization routine ldkfnslkdgndk sgnlsdkglsdkn `}</Text>
        </View>

        <View style={styles.ContentContainer}>
          <Text
            style={styles.subText}
          >{`\u25AA  Your own personalization routine ldkfnslkdgndk sgnlsdkglsdkn `}</Text>
        </View>
        <View style={styles.ContentContainer}>
          <Text
            style={styles.subText}
          >{`\u25AA  Your own personalization routine ldkfnslkdgndk sgnlsdkglsdkn `}</Text> */}
          <TextInput
            style={styles.textInput}
            placeholder="add description"
            placeholderTextColor="black"
          />
        </View>
      </View>

      <Text style={styles.headingText}>Description</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 342,
    height: 178,
    borderWidth: 1.5,
    borderColor: '#D6D6D6',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },

  wordCount: {
    color: '#B6B6B6',
    fontSize: 10,
    flex: 1,
  },
  headingText: {
    position: 'absolute',
    top: -14,
    left: 11,
    paddingHorizontal: 5,
    color: '#B6B6B6',
    backgroundColor: 'white',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
  },

  ContentContainer: {
    width: 314,
    alignContent: 'flex-start',
    marginBottom: 5,
  },

  // subText: {
  //   fontFamily: 'Nunito-Regular',
  //   color: Colors.neutrals800,
  //   fontWeight: '400',
  //   fontSize: 14,
  //   color: '#1D1B20',
  // },

  textInput: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'top',
    textAlign: 'left',
    color: 'black',
  },
});

export default Description;
