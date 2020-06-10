import React, {useCallback, useState} from 'react';
import {Animated, View} from 'react-native';
import useAnimate from '../../hooks/useAnimate';
import useAnimateParallel from '../../hooks/useAnimateParallel';

import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const MainScreen = () => {
  const randomColor = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };

  const values = {
    duration: 1000,
    initialX: 0,
    finalX: 100,
    initialY: 0,
    finalY: 100,
  };

  const [animatedColors, setAnimatedColors] = useState({
    initialColor: randomColor(),
    finalColor: randomColor(),
  });

  const animateConfig = {
    bounce: true,
    duration: values.duration,
    animate: true,
    iterations: -1,
  };

  const animatedX = useAnimate({
    fromValue: values.initialX,
    toValue: values.finalX,
    ...animateConfig,
  });

  const animatedY = useAnimate({
    fromValue: values.initialY,
    toValue: values.finalY,
    ...animateConfig,
  });

  const animatedRotation = useAnimate(animateConfig);

  const colorAnimationCallback = useCallback(() => {
    setAnimatedColors({
      initialColor: animatedColors.finalColor,
      finalColor: randomColor(),
    });
  }, [animatedColors.finalColor]);

  const colorAnimation = useAnimate({
    ...animateConfig,
    callback: colorAnimationCallback,
  });

  useAnimateParallel({
    animations: [animatedX, animatedY, animatedRotation],
    iterations: -1,
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.box,
            {
              left: animatedX.animatedValue,
              top: animatedY.animatedValue,
              backgroundColor: colorAnimation.interpolate({
                outputRange: [
                  animatedColors.initialColor,
                  animatedColors.finalColor,
                ],
              }),
              transform: [
                {
                  rotate: animatedRotation.interpolate({
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
