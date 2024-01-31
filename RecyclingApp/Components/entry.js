import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Entry = ({ onAdd }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBags, setSelectedBags] = useState(null);
  const [weight, setWeight] = useState('');

  const colorItems = [
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Brown', value: 'brown' },
  ];

  const bagsItems = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];

  const handleAdd = () => {
    if (selectedColor && selectedBags && weight) {
      onAdd(selectedColor, selectedBags, weight);
      setSelectedColor(null);
      setSelectedBags(null);
      setWeight('');
    } else {
      console.log('Please select all fields');
    }
  };

  return (
    <View style={styles.dropdownSectionContainer}>
      <View style={styles.dropdownSection}>
        
        {/* Color of Bag */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Color</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedColor(value)}
            items={colorItems}
            style={pickerSelectStyles}
            value={selectedColor}
            placeholder={{ label: 'Select a color', value: null }}
          />
        </View>

        {/* Number of Bags */}
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}></Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedBags(value)}
            items={bagsItems}
            style={pickerSelectStyles}
            value={selectedBags}
            placeholder={{ label: 'Select number of bags', value: null }}
          />
        </View>

        {/* Weight Input */}
        <View style={styles.weightInputContainer}>
          <TextInput
            style={styles.weightInput}
            onChangeText={setWeight}
            value={weight}
            placeholder="20"
            keyboardType="numeric"
          />
          <Text style={styles.kgLabel}>KG</Text>
        </View>
      </View>

      {/* Add Button */}
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownSectionContainer: {
    marginTop: 20,
    justifyContent: 'space-between',
  },
  dropdownSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  weightInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.5,
  },
  weightInput: {
    // Adjust width to leave space for KG label
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  kgLabel: {
    // Adjustments to align KG label with the input
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  addButtonContainer:{
    alignItems: 'flex-end',
    padding: 10,
  },
  addButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Entry;