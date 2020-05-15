import React from 'react';
import {Animated, View} from 'react-native';

import useAnimate from '../../hooks/useAnimate';

import styles from './styles';

const MainScreen = () => {
  const animatedOpacity = useAnimate({
    fromValue: 0,
    toValue: 1,
    bounce: true,
    iterations: -1,
    duration: 5000,
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {opacity: animatedOpacity}]} />
    </View>
  );
};

export default MainScreen;
