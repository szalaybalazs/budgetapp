import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Amount from './Amount';
import { categories } from '@/config';
const Expense = ({ width, category, setCategory, ...props }) => {
  console.debug(category)
  return (
    <View style={[styles.wrapper, { width }]}>
      <Amount { ...props } />
      <RNPickerSelect
        value={category}
        onValueChange={setCategory}
        items={categories.map(category => ({ value: category.id, label: category.label }))}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  }
})

export default Expense;