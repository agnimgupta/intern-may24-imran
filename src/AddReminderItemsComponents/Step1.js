// SelectableCard.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../Constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const Step1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = option => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Reminder Type</Text>
      <LinearGradient
        colors={['#F5F5F5', '#FFB90078']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.LinearGradientCard}>
        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === 'product' && styles.selectedCard,
          ]}
          onPress={() => handleSelect('product')}>
          <View style={styles.row}>
            <View style={styles.circle(selectedOption === 'product')} />
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>Product based</Text>
              <Text style={styles.description}>
                Skincare products, medication and other essentials.
              </Text>
            </View>
            <Image
              style={styles.image}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/d481/456c/c606407a1dbabfe086b8c1425885ca7a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BohVlYCaT9rw3EMRZq4MfEjfKjD-8LhGpsSUfv3quJX~XSaXCNn5jT0PCJ0G5iKksGFGc9lo2RAlQVV2q8KGDmiSinXCuk5-auVlR22cGueNE2bmYDkFAVTw-4dK2IKii4oWLF3ryjQ6s~sIgqCM0m5cfFkuY5j1eOqqMqcoyXJ1cjkb1zd7qAi~-IxQ~Ox3VKLuS~lB-hx3U01PzGvSSBpybz5u9QS6ZOCBGEXspS3We7Xag9tkz8W79Fq8Un1z5K5UXMR-fgOdhYo4dpuKFFZgvvCW-0hEXI2xbcDG1ZHrJhMkfIbZKj6iv0zHbdrrlXU3fWV7TYa6zwTm7f~3uQ__',
              }} 
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.orText}>OR</Text>

      <LinearGradient
        colors={['#F5F5F5', '#B7ADDF78']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.LinearGradientCard}>
        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === 'activity' && styles.selectedCard,
          ]}
          onPress={() => handleSelect('activity')}>
          <View style={styles.row}>
            <View style={styles.circle(selectedOption === 'activity')} />
            <View style={styles.textContainer}>
              <Text style={styles.optionText}>Activity based</Text>
              <Text style={styles.description}>
                Yoga sessions, running, gym workouts, and reading books.
              </Text>
            </View>
            <Image
              style={styles.image}
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/13df/8e96/c500c79ac6343022edf55f7946901f7e?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dtZvhgf8s6PpuVzhNcnz-JQp6xMuK6M5N4r7-Ei-stftX1cWdNBxUgeGVNAQwIdRw77RadkJW~PdYEOpRPiW9Id3NX7xp87nE~8k94ZC-DhAkjWv9EJFK2xcKWleRZ1qWGFVPIb-YRHk6aLjkWSj-2BnLpNkZbsR~lZjo4ytn3gDwWPIEmyOqwj~abUA~~TWNoS3j343b6MPybu680X4jAq9aicYHFSi83rxXaiXntOgTadbJ0VU4yj0ypFCGgq9OT68HDXoi32HqfjK5c18I~uaG1xPR9Y0xGxpJRLVH~NjEfCrcWdYr42MVoW1Xrv1~kcRThqjvxoxCd7i5352zA__',
              }} 
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    right: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 20,
    fontFamily: 'Nunito-Regular',
    color: '#101018',
  },

  LinearGradientCard: {
    width: 342,
    height: 132,
    borderRadius: 16,
    alignItems: 'center',
  },

  card: {
    width: 342,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,

    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
  },
  selectedCard: {
    borderColor: Colors.primary100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  circle: isSelected => ({
    marginRight: 15,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: isSelected ? Colors.primary100 : '#ccc',
    backgroundColor: isSelected ? Colors.primary100 : 'transparent',
    marginBottom: 10,
    borderColor: '#929292',
  }),
  optionText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#101018',
  },
  description: {
    fontFamily: 'Nunito-Regular',
    fontSize: 10,
    color: '#101018',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  orText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 15,
    left: 10,
    marginVertical: 10,
    color: '#101018',
  },
});

export default Step1;
