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
            uri: 'https://s3-alpha-sig.figma.com/img/bf86/f72b/5c845f4632a24b416e1b7b4b9c009145?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PUehuWISfpUIPVotNr7c~Tlhhb36JQWRV0hKmp7Z1lQQcusi70Rr63jKhDFexhZADQVErGfok65U-rO~McH5Ky3AYcEORyD-CT8j422gB4iOcHzd09HZ~qxnxM5RAx9fACQ43K9nGRsHbEtHB54~n3EWZugL7Tv~5UKsYX6U7PhfS6MrSzIEiyp890sxYt6sFB~3wRtxeum1o9HIGhQPvA7A9cGrMSfMahVeyUQOIDCPvurzD7cuUvKq87YlJlC39CLZpZwoT6bqZ~r4g0SzB3PQbgCuKDnGCW-vId5KAg8iygYAiZ1Id5aHppzzdzjOsdUCp-njRVInvts046QLQQ__',
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
