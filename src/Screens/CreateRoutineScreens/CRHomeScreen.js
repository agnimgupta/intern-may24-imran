import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ProgressCard from '../../CRComponents/ProgressCard';
import AssignRoutineCard from '../../ConstantComponents/AssignRoutineCard';
import Colors from '../../Constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalContent from '../../CRComponents/ModalContent';

const CRHomeScreen = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.MainContainer}>
      <ScrollView
        style={styles.ScrollContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.subHeaderText}>My Routine </Text>

        <View style={styles.progressContainer}>
          <ProgressCard
            img={require('./../../assets/Images/mountain.jpg')}
            title="Focus & Work"
            tltReminder="3 Reminder Items"
            progressText="40% Finished"
            progress={0.4}
          />
          <ProgressCard
            img={require('./../../assets/Images/saloon.jpg')}
            title="Skin Care"
            tltReminder="1 Reminder Items"
            progressText="70% Finished"
            progress={0.7}
          />
        </View>

        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeaderText}>
            Patients yet to Assign a Routine
          </Text>

          <TouchableOpacity style={styles.seeMore}>
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        </View>
        <View>
          <AssignRoutineCard
            onPress={() => navigation.navigate('AssignRoutine')}
          />
          <AssignRoutineCard
            onPress={() => navigation.navigate('AssignRoutine')}
          />
          <AssignRoutineCard
            onPress={() => navigation.navigate('AssignRoutine')}
          />
        </View>
      </ScrollView>
      {/* MODAL */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalContent
              press={() => setModalVisible(!modalVisible)}
              OnCLick={({}) => navigation.navigate('CreateNewRoutine')}
            />
          </View>
        </View>
      </Modal>
      {/* MODAL */}

      {/* Floating Button */}
      <View style={styles.fab}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setModalVisible(true)}>
          <Ionicons name="add" color="white" size={20} />
        </TouchableOpacity>
      </View>
      {/* Floating Button */}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  ScrollContainer: {
    padding: 20,
    backgroundColor: 'white',
  },

  subHeaderText: {
    fontFamily: 'Nunito-Medium',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 20,
  },

  seeMoreText: {
    color: Colors.primary100,
    fontSize: 14,
    fontWeight: 'bold',
  },

  progressContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  subHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: Colors.primary100,
    borderRadius: 30,
    elevation: 8,
  },
  iconContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    top: 160,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default CRHomeScreen;
