import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PreBuildRoutineCard from '../../ConstantComponents/PreBuildRoutineCard';
import MainButton from '../../ConstantComponents/MainButton';

const VideoToCreateRoutine = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerCont}>
        <Text style={styles.headerText}>
          Assign a routine to Geetanjali? Assign through your pre build Routines
        </Text>
      </View>

      <View style={styles.CardContainer}>
        <PreBuildRoutineCard
          img={{
            uri: 'https://images.unsplash.com/photo-1599847954335-d7c7ca35f6a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          title="Skin Care"
          tltReminder="3 Reminder Items"
        />
        <PreBuildRoutineCard
          img={{
            uri: 'https://i.pinimg.com/736x/42/3c/d0/423cd08b2b609ca66c28a071dd05c3c1.jpg',
          }}
          title="Skin Care"
          tltReminder="1 Reminder Items"
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 100}}>
        <View style={{height: 24, marginBottom: 15}}>
          <Text
            style={{
              fontFamily: 'Nunito-Regular',
              fontWeight: '600',
              fontSize: 14,
            }}>
            Unable to find a perfect routine for Geetanjali?
          </Text>
        </View>
        <View style={styles.secBtn}>
          <MainButton ButtonTitle="Create New Routine" />
        </View>

        <View style={styles.LearnMoreCont}>
          <TouchableOpacity onPress={() => alert('Functionality not added')}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                fontWeight: '600',
                color: Colors.primary100,
                fontSize: 16,
              }}>
              Learn More about Routine
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  headerCont: {
    marginTop: 15,
    width: 287,
    gap: 12,
  },
  headerText: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '600',
    color: '#212529',
    fontSize: 16,
  },

  CardContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 15,
    left: 10,
  },

  secBtn: {
    width: 296,
    // height: 56,
    // borderRadius: 12,
    // marginBottom: 12,
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: Colors.primary100,
    // backgroundColor: "white",
    // marginTop: 15,
  },

  LearnMoreCont: {
    height: 56,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default VideoToCreateRoutine;
