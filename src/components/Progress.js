import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import {
  Svg,
  Circle
} from 'react-native-svg';
import { colors } from '@/config';

const Progress = ({ value = 0.3, color = colors.primary }) => {
  return (
    <View style={[styles.wrapper, { backgroundColor: color }]}>

    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    width: 56,
    height: 56,
    borderRadius: 500,
  }
})

export default Progress;