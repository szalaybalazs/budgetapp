import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import Animated, { cond, lessOrEq } from 'react-native-reanimated';

import { colors, BALANCE_HEIGHT } from '@/config';
import NewScrollHeader from './NewScrollHeader';

const Header = ({ scrollposition, onPageChange }) => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Animated.View style={[styles.wrapper, { transform: [{ translateY: cond(lessOrEq(scrollposition, 0), scrollposition, 0) }]}]}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Add new entry</Text>
          <NewScrollHeader pagePosition={scrollposition} onSelect={onPageChange} />
        </View>
      </Animated.View>
    </>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    paddingTop: 16,
    borderBottomLeftRadius: 18,
  },
  contentWrapper: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '500',
    textAlign: 'center'
  },
  hamburger: {
    tintColor: colors.white,
    width: 20,
    height: 20,
    transform: [{ scaleY: -1 }],
    marginVertical: 16,
  },
})

export default Header;