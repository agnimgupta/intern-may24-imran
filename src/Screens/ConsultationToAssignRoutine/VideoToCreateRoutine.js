import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PreBuildRoutineCard from '../../ConstantComponents/PreBuildRoutineCard';
import MainButton from '../../ConstantComponents/MainButton';

const VideoToCreateRoutine = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerCont}>
        <Text style={styles.headerText}>
          Assign a routine to Geetanjali? Assign through your pre build Routines{' '}
        </Text>
      </View>

      <View style={styles.CardContainer}>
        <PreBuildRoutineCard
          img={{
            uri: 'https://s3-alpha-sig.figma.com/img/594b/93d0/a264eb0a338581295bfa901ae6a6fd8a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OeVaDCBS7xHFWdKh2fnlcVdVCd2lITGXabveUfTIlXhuekgBxdhQRQm9Ike8Z8b0AWRLNhf7RgCNp0~TVY7HOXFedk9E1ZeY-B6bh6imJIWwnSED~D~zIIp~wQdRpmNbS7hOy6ZrgOCSqN5sLC6eWHA39MVCQVnQdmvtphMiU-u~x53JMwVFcrl4dQHDBilW9saS3ofAJqKU-UEbIZHuCLXhE22TEeA6qQjK6FiqbnYz570JQtNskd1eXhAW8JfZft0Oj8Pp5ykYRHCH1V7lddlOAx81DHfvHdYdpG-YmsRX624RIUuGCHn5dLEtVGgeSC50vWsS0cAFwVmRrdZi7Q__',
          }}
          title="Skin Care"
          tltReminder="3 Reminder Items"
        />
        <PreBuildRoutineCard
          img={{
            uri: 'https://s3-alpha-sig.figma.com/img/58bc/add6/d3c30fe9523ef330392f4e82be89f155?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PibZ~ANd8m7FlNu35dN970GSEfl~Z~kfLOejawU2OMIqFXTLVSXhYmqQiCpFWMAogpe69BSiF5HVk57SgusVc28vni1DqMcfhbrUOpFQMC51NNS76uXco2IAAqnZij3VVWE3YTn~JdZoahf4ySOa8DPwdcjQleMSV0ej6v-5jK1LJ82VPkUeUKjrt-iLvsqVcmAAcPj1oE69nZLcwah2DEhn0jgoHaRzKQoNnx-0FrNQszrXURUg38y9zgWtv~LSZbxZukrnCyZmLLmKDljzzpladMBEZ46gZVGa2x1kz6AvUw4U1mJ0lOYtZKpgB5hcuOkHZhBEbn7DkEaBlqDOYQ__',
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
