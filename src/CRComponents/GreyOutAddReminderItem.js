import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';

const GreyOutAddReminderItem = ({heading, subHeading}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.iconsConatiner}>
        <Ionicons name="add" color="#A0A0A0" size={20} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.mainText}>{heading}</Text>
        <View style={styles.subTextCont}>
          <Text style={styles.subText}>{subHeading}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 350,
    height: 40,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsConatiner: {
    backgroundColor: 'white',
    width: 34,
    height: 34,
    borderWidth: 2,
    borderColor: '#A0A0A0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginLeft: 10,
    width: 350,
    height: 40,
    justifyContent: 'space-around',
  },
  subTextCont: {
    width: 342,
    height: 20,
  },

  mainText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    fontWeight: '500',
    color: '#A0A0A0',
  },

  subText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#B6B6B6',
  },
});

export default GreyOutAddReminderItem;
