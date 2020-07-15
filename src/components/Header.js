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
import Balance from './Balance';

const Header = ({ scrollposition }) => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Animated.View style={[styles.wrapper, { transform: [{ translateY: cond(lessOrEq(scrollposition, 0), scrollposition, 0) }]}]}>
        <View style={styles.contentWrapper}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/menu.png')} style={styles.hamburger} />
          </TouchableOpacity>
          <Text style={styles.title}>Budgets</Text>
          <Balance />
        </View>
      </Animated.View>
    </>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    marginBottom: (BALANCE_HEIGHT / 2) + 16,
    paddingTop: 32,
  },
  contentWrapper: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontWeight: '500',
    marginBottom: 16,
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