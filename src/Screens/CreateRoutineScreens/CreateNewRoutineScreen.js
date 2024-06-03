import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../../Constants/Colors';
import CustomTextInput from '../../ConstantComponents/CustomTextInput';
import Description from '../../CRComponents/Description';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AddReminderItems from '../../CRComponents/AddReminderItems';
import ProductCard from '../../CRComponents/ProductCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainButton from '../../ConstantComponents/MainButton';
import GreyOutAddReminderItem from '../../CRComponents/GreyOutAddReminderItem';
import NewDropDown from '../../ConstantComponents/NewDropDown';
import DocumentPicker from 'react-native-document-picker';

const CreateNewRoutineScreen = ({navigation}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImageUri, setSelectedImageUri] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
  };

  const data = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
  ];

  const images = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0414/8301/0212/products/Shot_08_Nina_Wet_Shampoo_0024_700x.jpg?v=1674678194',
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/736x/97/cc/91/97cc91808865cbe7d83a2c45073773cc.jpg',
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/736x/9a/23/73/9a23731d8cc90e73cdc3810b3ed591f9.jpg',
    },
    {
      id: 4,
      src: 'https://shopasteh.com/cdn/shop/articles/Welcome_to_the_world_of_aesthetic_photography_where_beauty_and_emotion_intertwine._I_m_Amanda_Wilson_a_passionate_visual_artist_with_a_deep_appreciation_for_capturing_moments_that_evo.png?crop=center&height=1350&v=1688380687&width=1080',
    },
    {
      id: 5,
      src: 'https://th.bing.com/th/id/R.ca246209b590ec98acd08a013b353aaa?rik=iP7LNPdBBxBSOg&riu=http%3a%2f%2fceremonia.com%2fcdn%2fshop%2fproducts%2f0332_Ceremonia_MELISSA_SH_09_ADM_SCALP_MASSAGER_161_1024x1024.jpg%3fv%3d1652723134&ehk=P9n3s25UFSIHA6bDhDvH%2bgoBI5CYbxaqahtIdlCGMvc%3d&risl=&pid=ImgRaw&r=0',
    },
  ];

  const handlePress = index => {
    setSelectedImageIndex(index);
  };

  const SelectImg = async () => {
    try {
      const Img = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      console.log(Img);
      setSelectedImageUri(Img.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err))
        console.log('User Cancelled The upload', err);
      else console.log(err);
    }
  };

  return (
    <ScrollView
      style={styles.ScrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        <CustomTextInput />
        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            This will be displayed as your Routine name.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.uploadImageContainer}
          onPress={SelectImg}>
          {selectedImageUri ? (
            <View>
              <Image
                source={{uri: selectedImageUri}}
                style={styles.uploadImageContainer}
              />
            </View>
          ) : (
            <View>
              <View style={{alignItems: 'center'}}>
                <EvilIcons name="image" size={60} color="#000000" />
              </View>
              <Text style={styles.uploadImageText}>Upload Image</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            This will be displayed as your Thumbnail.
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: 'Nunito',
              color: Colors.neutrals800,
              fontSize: 17,
            }}>
            OR
          </Text>
        </View>

        <Text style={styles.subHeaderText}>Select from our picks</Text>

        {/* SELECT FORM BELOW */}
        <View style={styles.container}>
          {images.map((image, index) => (
            <TouchableOpacity
              key={image.id}
              onPress={() => handlePress(index)}
              style={[
                styles.imageContainer,
                selectedImageIndex === index && styles.selectedImageContainer,
              ]}>
              <Image source={{uri: image.src}} style={styles.image} />
              {selectedImageIndex === index && (
                <View style={styles.iconContainer}>
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={Colors.primary100}
                  />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        {/* SELECT FORM BELOW */}
        <View style={styles.CategorydropDown}>
          <NewDropDown
            data={data}
            onSelect={handleSelect}
            label="Category"
            placeholder="Lifestyle"
          />
        </View>

        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            Please select the category of your Routine.
          </Text>
        </View>

        <View>
          <Description />
        </View>

        <View style={styles.subTextCont}>
          <Text style={styles.subText}>
            Please select the category of your Routine.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <View style={styles.DurationdropDown}>
            <NewDropDown
              data={data}
              onSelect={handleSelect}
              label="Duration"
              placeholder="6"
            />
          </View>

          <View style={styles.UnitdropDown}>
            <NewDropDown
              data={data}
              onSelect={handleSelect}
              label="Unit"
              placeholder="Weeks"
            />
          </View>
        </View>
        <View style={styles.addReminderContainer}>
          <AddReminderItems
            heading="Add Reminder Items"
            subHeading="Please select the category of your Routine."
          />
        </View>
        <View style={{marginTop: 15}}>
          <ProductCard />
        </View>

        <TouchableOpacity style={styles.MoreRemainderContainer}>
          <Text style={styles.MoreRemainderText}>More Reminder Items (2)</Text>
          <Octicons name="chevron-right" size={20} />
        </TouchableOpacity>

        <View style={styles.addReminderContainer}>
          <GreyOutAddReminderItem
            heading="Add Reminder Channels"
            subHeading="We will notify you about your Routine using channels."
          />
        </View>
        <View style={styles.supportingTextContainer}>
          <Text style={styles.supportingText}>
            This feature is available only for patients using the routine{' '}
          </Text>
        </View>

        <View style={styles.addReminderContainer}>
          <GreyOutAddReminderItem
            heading="Assign a Caregiver"
            subHeading="We will keep updating caregiver about your Routine."
          />
        </View>
        <View style={styles.supportingTextContainer}>
          <Text style={styles.supportingText}>
            You are the default carer for this routine.{' '}
          </Text>
        </View>

        <View style={styles.ButtonContainer}>
          <MainButton
            onPress={() => navigation.navigate('AddReminder')}
            ButtonTitle="Proceed"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScrollContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  mainContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  subTextCont: {
    marginTop: 5,
    marginBottom: 15,
    width: 342,
    height: 20,
  },

  subText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    left: 12,
    color: '#A0A0A0',
  },

  subHeaderText: {
    fontFamily: 'Nunito-Regular',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 10,
    right: 100,
  },

  uploadImageContainer: {
    width: 210,
    height: 210,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#D6D6D6',
    backgroundColor: Colors.primaryTint2,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  uploadImageText: {
    marginTop: 10,
    fontWeight: '400',
    fontFamily: 'Nunito-Medium',
    fontSize: 14,
    color: '#000000',
  },
  container: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: 'transparent',

    borderRadius: 8,
  },
  selectedImageContainer: {
    borderColor: Colors.primary100,
    borderWidth: 2.5,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 8,
  },

  CategorydropDown: {
    width: 342,
    height: 60,
    marginTop: 28,
  },
  DurationdropDown: {
    width: 197,
    height: 56,

    marginRight: 10,
    marginTop: 28,
  },
  UnitdropDown: {
    width: 131,
    height: 56,

    marginTop: 28,
  },

  addReminderContainer: {},

  ProductCardContainer: {},

  MoreRemainderContainer: {
    width: 335,
    height: 19,
    left: 5,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MoreRemainderText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#101018',
    fontFamily: 'Nunito-SemiBold',
  },

  supportingTextContainer: {
    width: 335,
    height: 16,
    marginBottom: 18,
  },
  supportingText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 12,
    fontWeight: '600',
  },

  btnStyle: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    marginTop: 25,
    marginBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
  },

  btnText: {
    fontFamily: 'SemiBold',
    color: 'white',
    fontSize: 18,
  },
  ButtonContainer: {
    width: 335,
    marginTop: 25,
  },
  iconContainer: {
    position: 'absolute',
    top: -11,
    right: -12,
    backgroundColor: 'white',
    borderRadius: 12,
  },
});

export default CreateNewRoutineScreen;
