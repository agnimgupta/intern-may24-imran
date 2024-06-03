import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';


const AssignRoutineCard = ({onPress}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topContent}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png',
          }} // Replace with actual image source
        />
        <View>
          <Text style={styles.name}>Lorem ipsum</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.concernText}>Concern:</Text>
            <Text style={styles.concern}>Migraine</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.assignButton} onPress={onPress}>
          <Text style={styles.assignButtonText}>Assign Routine</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  topContent: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  name: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    color:'black'
  },
  concernText: {
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: Colors.primary100,
  },
  concern: {
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
  },
  viewButton: {
    marginRight: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  viewButtonText: {
    fontFamily: 'Nunito-Medium',
    fontWeight: '400',
    fontSize: 14,
    color:'black'
  },
  assignButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary100,
  },
  assignButtonText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.primary100,
  },
});

export default AssignRoutineCard;
