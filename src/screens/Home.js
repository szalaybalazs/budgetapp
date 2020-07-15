import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useMemoOne } from 'use-memo-one';
import { Value } from 'react-native-reanimated';

import { Header, Category } from '@/components';
import { categories } from '@/config';

const Home = () => {
  const scrollposition = useMemoOne(() => new Value(0), []);
  return (
    <View>
      <ScrollView
        scrollEventThrottle={1}
        onScroll={({ nativeEvent: { contentOffset: { y }}}) => scrollposition.setValue(y)}
      >
        <Header scrollposition={scrollposition} />
        {
          categories.map(category => <Category {...category} key={category.id} />)
        }
      </ScrollView>
    </View>
  )
};

export default Home;
