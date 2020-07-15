import React from 'react';
import {
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, blueShadow } from '@/config';

const Action = () => {
  const { navigate } = useNavigation();

  const _handleAction = () => navigate('NewEntry');
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={_handleAction}>
        <Image source={require('../../assets/icons/add.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 64,
    height: 64,
    borderRadius: 500,
    ...blueShadow,
    overflow: 'visible',
  },
  touchable: {
    backgroundColor: colors.primary,
    borderRadius: 500,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: colors.white,
  }
})

export default Action;