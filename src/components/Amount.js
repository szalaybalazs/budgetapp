import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
} from 'react-native';
import { numberToString } from '@/core';

import { colors } from '@/config';
const Amount = ({ value, setValue }) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        keyboardType='numeric'
        placeholder='Amount'
      />
      <View pointerEvents='none' style={styles.value}>
        <Text style={styles.valueLabel}>{ numberToString(value) }</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.secondary,
    marginVertical: 16,
  },
  input: {
    flex: 1,
    paddingLeft: 16,
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: '500',
    opacity: 0,
  },
  value: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
  },
  valueLabel: {
    color: colors.darkBlue,
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 16,
  }

})

export default Amount;