import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Amount from './Amount';
const Income = ({ width, ...props }) => {
  return (
    <View style={[styles.wrapper, { width }]}>
      <Amount { ...props } />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  }
})

export default Income;