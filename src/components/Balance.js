import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { colors, shadow, BALANCE_HEIGHT } from '@/config';
import { numberToString } from '@/core';

import Action from './Action';

import { useBalance } from '@/providers/entries';

const Balance = () => {
  const { balance, getDay } = useBalance();
  const change = getDay();

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.title}>Total</Text>
        <View style={styles.balanceWrapper}>
          <Text style={styles.balance}>{ numberToString(balance) }</Text>
        </View>
        <Text style={[styles.change, change >= 0 ? styles.positive : styles.negative]}>{ numberToString(change) } today</Text>
      </View>
      <Action />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: BALANCE_HEIGHT,
    borderRadius: 18,
    marginBottom: -(BALANCE_HEIGHT / 2) - 16,
    ...shadow,
    justifyContent: 'center',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  balanceWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  balance: {
    fontSize: 36,
    fontWeight: '500',
    color: colors.primary,
  },
  title: {
    fontSize: 16,
    color: colors.darkBlue,
    fontWeight: '500',
  },
  change: {
    fontSize: 14,
    color: colors.darkBlue,
    fontWeight: '500',
  },
  positive: {
    color: colors.income
  },
  negative: {
    color: colors.expense,
  }
})

export default Balance;