import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Animated, { multiply, add, abs, sub } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '@/config';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Header = ({ pagePosition = 0, onSelect }) => {
  return (
    <View style={styles.wrapper}>
      <Option label='Expense' pagePosition={pagePosition} index={0} onSelect={onSelect} />
      <Option label='Income' pagePosition={pagePosition} index={1} onSelect={onSelect} />
      <Underline pagePosition={pagePosition} />
    </View>
  )
}

const Option = ({ label, index, pagePosition, onSelect = () => {} }) => {
  const _handleAction = () => onSelect(index);
  const translateY = multiply(abs(add(pagePosition, -index)), 6);
  const opacity = multiply(add(sub(1, abs(add(pagePosition, -index))), 1), 0.5);
  return (
    <TouchableOpacity onPress={_handleAction}>
      <Animated.View style={[styles.optionWrapper, { opacity, transform: [{ translateY }]}]}>
        <Text style={styles.optionLabel}>{ label }</Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

const Underline = ({ pagePosition }) => <Animated.View style={[styles.underline, { transform: [{ translateX: add(- 60, multiply(120, pagePosition)) }]}]} />

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  optionWrapper: {
    padding: 12,
    paddingHorizontal: 24,
    width: 120,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
    textAlign: 'center',
  },
  underline: {
    height: 3,
    width: 100,
    borderRadius: 500,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: -5,
  }
});

export default Header;