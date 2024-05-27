// Dropdown.js
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DropDown = ({ items, onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const buttonRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 10, left: 0, width: 0 });

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setOpen(false);
  };

  const toggleDropdown = () => {
    if (open) {
      setOpen(false);
    } else {
      buttonRef.current.measure((fx, fy, width, height, px, py) => {
        setDropdownPosition({ top: py + height, left: px, width: width });
        setOpen(true);
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        ref={buttonRef}
        style={styles.dropdownButton}
        onPress={toggleDropdown}
      >
        <Text style={styles.dropdownButtonText}>
          {selectedItem ? selectedItem.label : 'Select an item'}
        </Text>
      </TouchableOpacity>
      {open && (
        <View style={[styles.dropdownListContainer, dropdownPosition]}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
            style={styles.dropdownList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdownButton: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  dropdownListContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    zIndex: 1000,
  },
  dropdownList: {
    maxHeight: 200,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default DropDown;
