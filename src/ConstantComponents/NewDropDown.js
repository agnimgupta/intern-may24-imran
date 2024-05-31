// Dropdown.js
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewDropDown = ({data, onSelect, label, placeholder}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = item => {
    setSelectedItem(item);
    setShowOptions(false);
    onSelect(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectedItem}
        onPress={() => setShowOptions(!showOptions)}>
        <View style={{flex: 1}}>
          <Text style={styles.selectedItemText}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
        </View>
        {showOptions ? (
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-up-outline"
              color={Colors.primary100}
              size={20}
            />
          </View>
        ) : (
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-down-outline"
              color={Colors.primary100}
              size={20}
            />
          </View>
        )}

        <Text style={styles.labelText}>{label}</Text>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleSelect(item)}>
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.value.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  selectedItem: {
    maxHeight: '100%',
    height: '100%',
    borderRadius: 18,
    // padding: 10,

    borderWidth: 1,
    borderColor: '#D6D6D6',
    borderRadius: 18,
    flexDirection: 'row',
  },
  selectedItemText: {
    paddingTop: 15,
    paddingLeft: 20,
    fontSize: 16,
    color: 'black',
  },
  optionsContainer: {
    position: 'absolute',
    top: 50,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    zIndex: 1000,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  labelText: {
    position: 'absolute',
    top: -12,
    left: 14,
    paddingHorizontal: 5,
    color: '#B6B6B6',
    backgroundColor: 'white',
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
});

export default NewDropDown;
