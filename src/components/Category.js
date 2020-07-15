import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useBalance } from '@/providers/entries';
import { numberToString } from '@/core';
import { colors, shadow } from '@/config';

import Progress from './Progress';

const Category = ({ label, id, defaultAmount, color }) => {
  const { getCategory } = useBalance();
  const expense = getCategory(id, new Date().getMonth());
  return (
    <View style={styles.wrapper}>
      <Progress value={.78} color={color} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title}>{ label }</Text>
          <Text style={styles.expense}>{ numberToString(Math.abs(expense)) }</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.detail}>{ numberToString(defaultAmount + expense) } left</Text>
          <Text style={styles.detail}>{ numberToString(Math.abs(expense)).replace('Ft', '').trim() } / { numberToString(defaultAmount).replace('Ft', '').trim() }</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: colors.white,
    ...shadow,
    borderRadius: 16,
    flexDirection: 'row',
    padding: 16,
  },
  content: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  row: {
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: colors.darkBlue,
    fontWeight: '500',
  },
  expense: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
  },
  detail: {
    color: colors.secondary,
    fontWeight: '500',
    fontSize: 14,
  },
});

export default Category;