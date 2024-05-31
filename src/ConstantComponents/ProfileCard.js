// ProfileCard.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileCard = ({age, height, weight, SleepPattern, General_Concerns}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{age}</Text>
        </View>

        <Text style={styles.value}>34</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Height</Text>
        </View>
        <Text style={styles.value}>{height} ft</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Weight</Text>
        </View>
        <Text style={styles.value}>{weight} kg</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Sleep Pattern</Text>
        </View>
        <Text style={styles.value}>{SleepPattern}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>General Concerns</Text>
        </View>
        <Text style={styles.value}>{General_Concerns}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 296,
    height: 218,
    padding: 20,
    borderWidth: 1.5,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderColor: '#D6D6D6',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  labelContainer: {
    width: 149,
    height: 18,
  },
  label: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '500',
    fontSize: 12,
    color: '#5A5A5A80',
    marginRight: 10,
  },
  value: {
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
});

export default ProfileCard;
