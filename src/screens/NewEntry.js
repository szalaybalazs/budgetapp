import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { NewHeader, Income, Expense, Button } from '@/components';
import { useMemoOne } from 'use-memo-one';
import { Value, useCode, call } from 'react-native-reanimated';
import { useBalance } from '@/providers/entries';

const { width: DISPLAY_WIDTH } = Dimensions.get('screen');
const NewEntry = ({ navigation }) => {
  let isIncome = false;
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState(null);

  const scrollposition = useMemoOne(() => new Value(0), []);
  const scrollview = useRef(null);
  const { addEntry } = useBalance();

  useCode(() => call([scrollposition], ([val]) => (isIncome = val > 0.5)));

  const _handlePageChange = (index) => scrollview?.current?.scrollTo({ x: index * DISPLAY_WIDTH });

  const _handleEntry = () => {
    addEntry({ category: isIncome ? 'INCOME' : category, value });
    navigation.pop();
  }
  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior='padding' keyboardVerticalOffset={42}>
      <NewHeader scrollposition={scrollposition} onPageChange={_handlePageChange} />
      <ScrollView
        ref={scrollview}
        style={styles.pageWrapper}
        scrollEventThrottle={1}
        onScroll={({ nativeEvent: { contentOffset: { x }}}) => scrollposition.setValue(x / DISPLAY_WIDTH)}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Expense category={category} setCategory={setCategory} value={value} setValue={setValue} width={DISPLAY_WIDTH} />
        <Income value={value} setValue={setValue} width={DISPLAY_WIDTH} />
      </ScrollView>
      <Button label='Add entry' onPress={_handleEntry} />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  pageWrapper: {
    // flex: 1,
  }
})

export default NewEntry;