import React, {startTransition} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import Colors from '../Constants/Colors';

const ProductCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0645/9650/8925/files/Kuntal-Care-Malt-1-min-1024x1024_a790e3f8-c325-442b-ba84-45cca12d8230_480x480.jpg?v=1662732905',
          }}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={{flexWrap: 'wrap', width: 200, marginBottom: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: 'Nunito-SemiBold',
              fontWeight: '400',
            }}>
            Amrutam Kunal Hair..
          </Text>
        </View>
        <View style={styles.edibleSign}>
          <Text
            style={{
              color: '#A0A0A0',
              fontSize: 14,
              fontFamily: 'Nunito-Regular',
              fontWeight: '400',
            }}>
            Consumable
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewDetails}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 342,
    height: 120,
    flexDirection: 'row',
    margin: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 16,
  },
  imgContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },

  contentContainer: {
    width: 185,
    height: 84,
    marginLeft: 10,
    justifyContent: 'space-between',
  },

  edibleSign: {
    maxWidth: 110,
    height: 27,
    padding: 3,
    borderRadius: 64,
    backgroundColor: '#E9F1E0',
    textAlign: 'center',
  },

  viewDetails: {
    fontFamily: 'Nunito-SemiBold',
    color: Colors.primary100,
    fontWeight: '600',
    fontSize: 16,
  },
  headertext: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '500',
    fontSize: 16,
    Color: '#1D1B20',
  },
});

export default ProductCard;
