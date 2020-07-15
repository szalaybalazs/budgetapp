import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '@/config';

const Button = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>{ label }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 12,
  },
  label: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    color: colors.white,
  }
})

export default Button;